import Image from 'next/image'; // For Next.js optimized image loading
import Lightbox from "yet-another-react-lightbox";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import "yet-another-react-lightbox/styles.css"; 
import axios from 'axios';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1); // State for tracking current Lightbox image
  const [gallery, setGallery] = useState([]); // Store gallery data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.url}/api/gallery/get-gallery`);
           // Set new items at the top of the gallery array
           setGallery(response.data.reverse()); // Reverse data order if the latest is last in array
        console.log("Gallery data fetched:", response.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error.message);
        if (error.response) {
          console.error("Server responded with:", error.response.status, error.response.data);
        } else if (error.request) {
          console.error("No response received from server");
        } else {
          console.error("Unexpected error:", error.message);
        }
      }
    };
    fetchData();
  }, []);

  // Generate slides array for Lightbox
  const slides = gallery.flatMap(item => 
    item.Images.map(imgSrc => ({ src: imgSrc, alt: item.Title }))
  );

  return (
    <>
      <div className="container-fluid">
        <h4 className="cw tac fs-33 mfs-24 fw7 fwb mt70 cb ">
          Journey of Faith : <span className="logo-clr fwb"> Hajj and Umrah </span> Galleries
        </h4>
        
        <div className="gallery-grid">
          {gallery.map((items, titleIndex) => (
            <React.Fragment key={titleIndex}>
              <p className="fs-24 green-clr fwb pdt24 tac">{items.Title}</p>
              <div className="df fw fac fjc gap20 mt40">
                {items.Images.map((imgSrc, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className="gallery-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLightboxIndex(titleIndex + imgIndex)} // Open Lightbox on click
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Image
                      className="br20"
                      src={imgSrc}
                      alt={items.Title}
                      width={300}
                      height={200}
                      style={{ cursor: 'pointer', width: "100%", height: "auto" }}
                    />
                  </motion.div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Lightbox for displaying clicked image */}
        <Lightbox
          index={lightboxIndex}
          slides={slides} // Pass slides array to Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
        />
      </div>

      {/* Optional styling for the image grid */}
      <style jsx>{`
        .gallery-item {
          flex-basis: 30%;
          max-width: 300px;
        }
        @media (max-width: 768px) {
          .gallery-item {
            flex-basis: 45%;
          }
        }
        @media (max-width: 480px) {
          .gallery-item {
            flex-basis: 100%;
          }
        }
      `}</style>
    </>
  );
}
