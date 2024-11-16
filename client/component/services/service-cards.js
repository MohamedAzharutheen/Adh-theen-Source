import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineArrowForward } from "react-icons/md";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M10 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <style jsx>{`
        .arrow {
          position: absolute;
          top: 7%;
          right: 100px;
          transform: translateY(-50%);
          cursor: pointer;
         background-color: #fff;
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
          z-index: 999;
        }
        .arrow:hover {
          background-color: rgba(255, 255, 255, 1);
        }
        @media only screen and (max-width: 1200px){
                .arrow {
          position: absolute;
          top: 7%;
          right: 43%;
          transform: translateY(-50%);
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
          z-index: 999;
        }
        }
        @media only screen and (max-width: 800px){
                        .arrow {
          position: absolute;
          top: 7%;
          right: 33%;
          transform: translateY(-50%);
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
          z-index: 999;
        }
        }
                @media only screen and (max-width: 380px){
                        .arrow {
          position: absolute;
          top: 7%;
          right: 10%;
          transform: translateY(-50%);
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
          z-index: 999;
        }
      }
      `}</style>
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M14 6l-6 6 6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <style jsx>{`
        .arrow {
          position: absolute;
          top: 7%;
          left: 83%;
          transform: translateY(-50%);
          cursor: pointer;
          background-color: #fff;
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
          z-index:999;
        }
        .arrow:hover {
          background-color: rgba(255, 255, 255, 1);
        }
           @media only screen and (max-width: 1200px){
           
         .arrow {
          position: absolute;
          top: 7%;
          left: 40%;
          transform: translateY(-50%);
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
          z-index:999;
        }
           }
      `}</style>
    </div>
  );
};

export default function ServiceCards() {
  const servicesData = [
    {
      img: "/assets/images/services-img/hajj-service.jpg",
      title: "Hajj Service",
      cnt: "Embrace the essence of pilgrimage with our Hajj services, tailored to create a memorable experience filled with blessings and tranquility."
    },
    {
      img: "/assets/images/services-img/umrah-service.jpg",
      title: "Umrah Service",
      cnt: "Experience the beauty of devotion with Ath-Theen, guiding you through the sacred rituals of Umrah in a journey filled with peace and purpose."
    },
    {
      img:"/assets/images/services-img/passport-service.jpg",
      title: "Passport Services",
      cnt: "Your passport to adventure awaits! Trust us to handle the details while you dream of your next destination."
    },
    {
      img: "/assets/images/services-img/visa-stamp.jpg",
      title: "Visa Stamping",
      cnt: "Travel the world without worry, thanks to our trusted visa stamping service! Each stamp brings you closer to your dream destinations."
    },
    {
      img: "/assets/images/services-img/visiting-visa.jpg",
      title: "Visiting Visa",
      cnt: "Embark on a journey of discovery with our expert Visiting Visa assistance, ensuring every step of your adventure is smooth and stress-free!."
    },
    {
      img: "/assets/images/services-img/air-ticket.jpg",
      title: "Air Ticket",
      cnt: "Fly with confidence and style through our exceptional Air Ticket services, designed to make every journey a memorable one! Whether it's business or pleasure, we take you there with grace and ease."
    },
    {
      img: "/assets/images/services-img/railway-ticket.jpg",
      title: "Railway Booking",
      cnt: "Embark on a journey of comfort and convenience with our Railway Booking service, where each trip is crafted to perfection. Your next adventure awaits—hop on and enjoy the ride!."
    },
    {
      img: "/assets/images/services-img/bus-ticket.jpg",
      title: "Bus Booking",
      cnt: "Hop on board and let us take you places! Experience hassle-free bus booking and explore new horizons with ease."
    },
  ];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, 
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="slick-dot" key={i}>
        <style jsx>
          {`

            .slick-dot {
              width: 10px;
              height: 10px;
              background-color: #d0ab17; /* Default color */
              border-radius: 50%;
              margin: 1px 5px;
              cursor: pointer;
              display: inline-block;
              margin-bottom: -3px;
            }
            .slick-dot.slick-active {
              background-color: #ffffff; /* Set the color for the active dot */
            }
            @media only screen and (max-width: 1023px) {
              .slick-dot {
                margin-bottom: 30px;
              }
            }
          `}
        </style>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1223,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
    ]
  };

  return (
    <>
      <section className='bg-slide  pdtb40'>
        <div className='container-fluid'>
          {/* Box */}
           <div className="">
            <h4 className="tac fs-33 mfs-24 green-clr fwb "> <span className="logo-clr fwb">Our Service </span>  Categories</h4>
           </div>
          <Slider {...settings}>
            {servicesData.map((items, index) => {
              return (
                <div className='col mt92 ' key={index}>
          <div className='df fjse'>
                <div className='serv-card cursor' key={index}>
                  <div className=''>
                    <Image
                      style={{  width:'100%'}}
                      src={items.img}
                      width={358}
                      height={230}
                      alt='Serv-Card'
                      loading='lazy'
                      className='hover-image br20' // Add class for hover effect
                  
                    />

                    </div>
                    <div className={'title-box df fac fjc'}>
                       <div className="">
                          <p className="fs-20 fwb ">{items.title}</p>
                       </div>
                  </div>
                 
                  {/* <h6 className='fs-24 mfs-16 fwb'>{items.title}</h6> */}
                  <div className='para-high'>
                 
                    <p className="fs-16 para-height">{items.cnt}</p>
                  </div>
                  <div className="line-code mt22"></div>
                  <Link href={"/contact"}>
                    <div className='mt32 df fjsb fac'>
                      <button className='slot-btn  cw fwb fs-16'>
                        Book On Appoinment
                      </button>
                      <div className='hvz'>
                      <MdOutlineArrowForward size={34} className='logo-clr '/>
                      </div>
                    </div>
                  </Link>
                </div>
                </div>
                </div>
              )
            })}
          </Slider>
          </div>
      </section>

      <style jsx>{`
.hvz{
transition: all 0.4s linear;

}
.hvz:hover{
border: 1px solid #e9c751;
padding: 5px; 
border-radius: 50%;
}

.bg-slide{  
       background-image: url('/assets/images/services-img/flight-icon.svg');
            width:100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-position: cover;
            background-size: 100% 100%;
            
        }
.col {
  width: 100%; // Set the width to 100% for smaller screens
  margin-bottom: 52px;
  margin-left: auto;
  margin-right: auto; // Center the slider on the screen
}
  .title-box{
   position: relative;
   top: 3%;
   left: 50%;
  //  background-color: #F4E2E6;
    transform: translate(-50%, -80%);
    border-radius: 8px;
    width: 257px;
    padding: 10px 10px;
    background: rgba(255, 255, 255, 0.3); /* Example: Light mirror effect with transparency */
  backdrop-filter: blur(10px);          /* Apply a blur effect for a mirror-like look */
  -webkit-backdrop-filter: blur(10px);  /* Ensure compatibility with webkit browsers */
  border: 1px solid rgba(255, 255, 255, 0.8); /* Optional: A soft border to enhance the mirror effect */
    // height: 78px;
  }
    .line-code{
    border: 1px dashed;
    }
          .serv-card {
            border-radius: 20px;
            background-color: white;
            heigth:;
            padding: 10px 20px;
            box-shadow: 0px 4px 12px 0px #00000040;
            width: 397px !important;
            height: 100%;
            overflow: hidden; /* Ensures content is clipped if scaled */
            position: relative; /* To position button absolutely */
            margin: 0 10px; /* Add horizontal margin for spacing between cards */
          }
        .para-height{
        height: 7rem;
        }
        .pd20 {
          padding: 20px;
        }

        .slot-btn {
          background-color: #d0ab17;
          border-radius: 10px;
          border: none;
          padding: 10px;
        }
        @media only screen and (max-width: 768px){
        
                  .bg-slide{  
        background-image: none; 

            
        }
        }

        @media only screen and (max-width: 420px){
         .title-box{
   position: relative;
   top: 5%;
   left: 50%;
background: rgba(255, 255, 255, 0.3); /* Example: Light mirror effect with transparency */
  backdrop-filter: blur(10px);          /* Apply a blur effect for a mirror-like look */
  -webkit-backdrop-filter: blur(10px);  /* Ensure compatibility with webkit browsers */
  border: 1px solid rgba(255, 255, 255, 0.8); /* Optional: A soft border to enhance the mirror effect */

    transform: translate(-50%, -80%);
    border-radius: 8px;
    width: 200px;
    padding: 10px 10px;
    // height: 78px;
  }
      .serv-card {
          border-radius: 20px;
          background-color: white;
          padding: 10px 20px;
          box-shadow: 0px 4px 12px 0px #00000040;
          width: auto; !important;
          height: auto;
          overflow: hidden; /* Ensures content is clipped if scaled */
          position: relative; /* To position button absolutely */
          margin: 0 10px; /* Add horizontal margin for spacing between cards */
        }
        .para-height{
        height: auto;
        }

        }

      `}</style>
    </>
  );
}
