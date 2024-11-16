import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import EnquiryForm from './enquiry-form';
export default function Address() {
  return (
   <>
    <section className='mt70 container'>
       <h4 className={`fs-33 tac`}>Our Contact Information</h4>

       <div className='row justify-content-center'>
        <div className='col-12 col-md-6 col-lg-5 '>
          <div className='card mt40'>
            <div className='row justify-content-center'>
                <div className='col-3 col-md-2 align-content-center'>
                <IoLocationSharp size={64} color='#4CAF50'/> 
                </div>
                <div className='col-9 col-md-8'>
                    <p className={`fs-24 fw-bold `}>Our Address</p>
                    <p className={`fs19 lnh33 mt-3`}>09 Anna veethi, Melapalayam Tirunelveli-627005</p>
                </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-5'>
          <div className='card mt40'>
            <div className='row justify-content-center'>
                <div className='col-2 align-content-center'>
                <FaPhoneVolume size={50} color='#4CAF50'/>
                </div>
                <div className='col-9 '>
                    <p className={`fs-24 fw-bold `}>ContactUs</p>

                    <p className={`fs16 lnh33 pdt10`}> 950077 1134</p>  
                    <p className={`fs16 lnh33 `}> 8838 504118</p>
                    <p className={`fs16 lnh33 `}> aldeentoursandtravels@gmail.com</p>
                </div>
            </div>
          </div>
        </div>


        <div className='col-12 col-md-6 col-lg-5'>
        <div className='card mt40'>
            <div className='row justify-content-center'>
                <div className='col-2 align-content-center'>
                <FaClock size={60} color='#4CAF50'/> 
                </div>
                <div className='col-9 col-md-9'>
                    <p className={`fs-24 fw-bold`}>Working Hours</p>
                    <p className={`fs19 lnh33 mt-3`}>Days : Sunday-Thursday<br/>
                     <span className=''>   
                    Timing : 09 : 00 - 7 : 30 </span></p>
                </div>
            </div>
          </div>
        </div>
       </div>
    </section>
    <EnquiryForm/>
    <section className="container-fluid">
    <div className='col-12  google-map mt70'>
    <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.906062180957!2d77.70791197399276!3d8.700470594047102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041320431936e5%3A0x73e81c295eb83a69!2sLuzosa%20creations!5e0!3m2!1sen!2sin!4v1728722490947!5m2!1sen!2sin" 
  title="Map showing location of Ad-theen Hajj & Umrah Sevices" 
  width="100%" 
  height="400" 
  style={{borderRadius:"10px"}} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div>
    </section>
    <style jsx>
   {`
   .google-map{
   width: 100%;
   }
   
      .card{
   height: 230px;
   background-color: #f2f5fa;
   padding : 30px;
   border-radius: 10px;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
   }
    @media only screen and (max-width: 1023px){
          .card{
   height: auto;
   background-color: #f2f5fa;
   padding : 20px;
   border-radius: 10px;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
   }
    }
   
   `} 
    
    
   </style> 
 </>
      
  )
}
