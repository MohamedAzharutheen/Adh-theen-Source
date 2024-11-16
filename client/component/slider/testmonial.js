import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);

  const reviews = [
    {
      name: 'Mohamed',
      review: 'Exceptional service! They truly understood our needs and delivered beyond our expectations',
    },
    {
      name: 'Saba',
      review: 'Professional and reliable every step of the way—working with them was a seamless experience',
    },
    {
      name: 'Sabi',
      review: 'Great communication and attention to detail. Highly recommend their services!',
    },
    {
      name: 'Navaz',
      review: `Their expertise and dedication made all the difference. We couldn't be happier with the results`,

    },
    {
      name: 'Meeran',
      review: 'They made the process easy and stress-free. Excellent service!',
    },
    {
      name: 'Farook',
      review: 'They made the process easy and stress-free. Excellent service!',
    },
    // Add more reviews as needed
  ];

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (totalPages - 1) * reviewsPerPage : prevIndex - reviewsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= (totalPages - 1) * reviewsPerPage ? 0 : prevIndex + reviewsPerPage
    );
  };

  // Update reviewsPerPage on window resize
  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize(); // Initial call to set reviewsPerPage
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section className="bg-clr">
        <div className="container">
          <div className="df fac fjc">
            <div className="df fac mfdc">
              <div className="">
                <h2 className="fs40 mfs28 lnh50 mlnh32 fw7 logo-clr">What Our Clients <span className='green-clr fw7'>  Said About Us </span> </h2>
                <p className="fs22 lnh33 fw4 mfs18 mlnh27 blue mt32">
                  Hear what our clients have to say about their experience with us
                </p>
              </div>
              <div className="">
                <div className="df gap10 mmt32">
                  {reviews.slice(currentIndex, currentIndex + reviewsPerPage).map((review, index) => (
                    <div key={index} className={`ml37 mml0 review-box cursor 
                    ${index === 0 ? 'active-review' : ''}`}>
                      <div className="df fjsb fac">
                        <p className="fs22 fw7 lnh33 flyz ">{review.name}</p>
                        <Image className='review-star' src={"/assets/images/rating.svg"} width={95} height={16} alt="Review-Star-Img" loading="lazy" />
                      </div>
                      <p className="fs18 lnh27 fw4 drk-blue pdt16 hvz">{review.review}</p>
                    </div>
                  ))}
                </div>
                <div className="df mt32 pdl40 gap32 mpdl0">
                    <div className='prev'>
                  <GrFormPrevious onClick={handlePrev} size={30} className="cursor" />
                  </div>
                  <div className='prev'>
                  <GrFormNext onClick={handleNext} size={30} className="cursor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
          .active-review {
          background-color: #e9c751 !important; /* Yellow background for active reviews */
        }
        .bg-clr {
          background-color: #F3f8f6;
          width: 100%;
          padding-bottom: 80px;
          padding-top: 80px;
        }
          .prev{
          background: #fff;
          border-radius: 100%;
          padding: 10px; 
           box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }

        .review-box {
          width: 305px;
          height: 180px;
          border-radius: 10px;
          padding: 10px;
          background-color: #ffffff;
          transition: all 0.4s linear;
          
        }
          .review-box:hover{
           background-color: #e9c751;
       
          }
           .hvz{
           transition: all 0.4s linear;
           }
        .review-box:hover .hvz{
        color :#ffffff;
        }

        @media (max-width: 768px) {
          .review-box {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
