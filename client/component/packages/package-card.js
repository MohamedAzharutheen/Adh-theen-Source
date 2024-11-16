import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import axios from 'axios';
import moment from 'moment';

export default function PackageCard({closeCard,banner}) {

  // const [banner,setBanner]=useState(null);

  // const fetchBannerData = async()=>{
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/banner');
  //    if (response.data && response.data.length > 0) {
  //       setBanner(response.data[0]); // Set the first banner
  //       console.log("Fetched Data:", response.data[0]); // Log the fetched data
  //     }
  //   } catch (error) {
  //     console.error("Error fetching banner data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchBannerData(); // Call fetchBannerData on component mount
  // }, []); // Empty dependency array ensures this runs once on mount

  // if (!banner) {
  //   return <div>Loading...</div>; // Show loading state while data is being fetched
  // }
  // if (!banner) {
  //   return <div>Loading...</div>; // Show loading state while data is being fetched
  // }

    // Check if Depature exists
    if (!banner.Depature) {
      return <div>Error: Departure date is not available.</div>; // Handle absence of Depature
    }
const dateFormat =(dateString)=>{
  const dayWithSuffix = moment(dateString).format('Do');
  const month = moment(dateString).format('MMMM');
  
  return {dayWithSuffix,month};
}

const {dayWithSuffix,month}= dateFormat(banner.Depature);
  return (
    <>
    <section className='container'>
        <div className='popup-card'>
        <div className='package-card pos-r'>
          <div className='df fjfe icon-bg pd10 cursor' onClick={closeCard}>
             <div className="icon-pos">
             <IoCloseSharp className="fwb" size={24} color='#000'/>
             </div>
             </div>
            <div className='head pdtb5'>
                <Image src={"/assets/images/logos/logo.svg"} width={80} height={80} alt='Logo' loading='lazy' quality={100}/>
            </div>
            <div className='insd-card pdtb20'>
             <h4 className='fs-24 fwb mb20 cw'>{banner.PackageName || `Default Package Name`}</h4>
             <p className='fs-16  cw mb20 fwb'>{dayWithSuffix } {month}</p>
             <p className='fs-19 fwb  pdt20' style={{color:'#fcc305'}}> ₹ {banner.Price || `88,000`} /-</p>
             </div>
             <div className='footer df fac fdc fjc pd10'>
               <p className='fs-16 '>ContactUs On Whatsapp</p> 
               <div className='df gap8 pd10 fac'>
             <FiPhoneCall />
                <p className='fs-14 fwb'>
                    +91 950077 1134
                </p>
                </div>
             </div>
        </div>
        </div>
    </section>

    <style jsx>{`
         .popup-card{
              position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        .icon-bg{
        background-color: #006C35;
        border-radius: 10px 10px 0px 0px;
        }
        .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -15px;
        left: 95%;
        }
        .head{
        background-color: #ffffff;
        width: 100%;

        }
        .package-card {
         
            width: 360px;   
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
            
        }
        .insd-card{
        background-color: #006C35;
        // background-image: url('/assets/images/packages/package-card-bg.png');
        width: 100%;
        
        }
        .package-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        
        .card-subtitle {
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

                @media only screen and (max-width: 420px){
         .package-card {
            width: 290px;   
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }
      .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 3px;
        top: -13px;
        left: 94%;
        }
        }
        @media (max-width: 768px) {

        }

            
    `}</style>
    </>
  )


  
}
  