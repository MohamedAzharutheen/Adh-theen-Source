import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BoxBanner() {
  return (
    <>
      <section className="contact-banner pdtb20">
        <div className="overlay"></div>
        <div className="container-fluid df fac fjc" style={{ height: '400px' }}>
          <div className="content text-center">
            <div className="row df fac">
              <div className="col-12 col-lg-8">
                <h1 className="fs-45 mfs-19 lh-md lh-lg">READY FOR UNFORGATABLE<br /> TRAVEL. REMEMBER US!</h1>
                <p className="fs19 lnh33 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <div className="col-12 col-lg-4 mt-5 mt-lg-0">
             <Link href={"/"}>   <motion.button
                  className='fs-19 cw contact-btn'
                  animate={{ y: [0, -30, 0] }} // Move up and down
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", }} // Animation duration and repeat
                >
                   Contact Us
                </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-banner {
          position: relative;
          width: 100%;
          background: url('/assets/images/contact/contact-section.jpg') no-repeat center center;
          background-size: cover;
          background-attachment: fixed; /* This makes the background fixed */
          z-index: 1;
          color: white;
        }



        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Overlay with opacity */
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
        }


        @media (max-width: 768px) {

          .contact-banner {
            height: auto; /* Allow auto height for smaller screens */
          }
        }
      `}</style>
    </>
  );
}
