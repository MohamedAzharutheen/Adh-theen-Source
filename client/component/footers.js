import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdMarkEmailUnread } from "react-icons/md";
import moment from 'moment';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footers() {
  const currentYear = moment().year();
  return (
    <>
    <section className='container-fluid mt70'>
      <div className='row '>
         <div className="col-12 col-lg-3 footer-logo tac pdtb50">
         <div className=''>
                    <Image src={"/assets/images/logos/logo.svg"} width={180} height={180} alt='Footer-Logo' loading='lazy'/>
          </div>
                <h6 className='fs-24 lnh33 mt-4'>Want to Perform <span className='fwb'>Umrah With Us</span>  ?</h6>
              <Link href={"/contact"}> <button className={`fs-16 fw6 slot-btn dim-ylw mt20`}>Book Your Slot</button>
              </Link> 
            </div>
        
         <div className="col-12 col-lg-9 footer-bg pdtb50">
          <div className="row gap-4">
          <div className='col-12 col-lg-2 mpdt24'>
                <h5 className={`fs-19 fw6 cw pdb10 mpdb0`}>Quick Link</h5>
                {['Umra Packages','Hajji Packages','Custom Packages','Umrah Holidays','Umrah Visa','Travels'].map((items,index)=>{
                    return(
             <Link href={``} key={index}>   <p className={`fs-14 dim-whit fw4 pdt13`}>{items}</p></Link>
            )
        })}
            </div>

          <div className='col-12 col-lg-3 mpdt12 '>
                <div className='df gap8 pdb10'>
                <FaPhoneAlt size={24} className='dim-ylw'/>
                
                <h5 className={`fs-19 fw6 cw `}>More Enquiry</h5>
                </div>
               <p className={`fs-14 dim-whit fw4 pdt13 mpdt5`}>+91 8124 2899 72 </p>
               <div className='df  gap8 pdb10 mt12'>
               <MdEmail size={24} className='dim-ylw'/>
                
                <h5 className={`fs-19 fw6 cw `}>Send Mail</h5>
                </div>
                <p className={`fs-16 dim-whit fw4 `}>info@luzosa.in</p>
                <div className='df  gap8 pdb10 mt16 mmt24'>
                <FaLocationArrow size={24} className='dim-ylw'/>
                
                <h5 className={`fs-19 fw6 cw `}>Address</h5>
                </div>
                <p className={`fs-16 dim-whit fw4 `}>Mealapalayam Tirunelvelei-627005</p>
              
            </div>
            <div className='col-12 col-lg-2 mpdt  '>
            <h5 className={`fs-19 fw6 cw pdb10`}>Who We Are</h5>
            <p className='fs-16 lnh27 dim-whit fw4 pdt16 mpdt5 '>Connect with us for all your Hajj and Umrah needs. Ath-Theen is dedicated to guiding you every step of the way!</p>
            </div>
            <div className='col-12 col-lg-3 google-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.906062180957!2d77.70791197399276!3d8.700470594047102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041320431936e5%3A0x73e81c295eb83a69!2sLuzosa%20creations!5e0!3m2!1sen!2sin!4v1728649676215!5m2!1sen!2sin"  
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
         </div>
      </div>

    </section>
    <div className='footer-bottom'>
      <div className="df fjsb fw mfac mfjc social-icon">
          <ul className='df gap20 mgap10 fw pdl0 mb0'>
          <Link href={"/aboutus"}>   <li className={`fs-14 dim-whit fw5`}>  About Us</li></Link> 
          <Link href={"/contact"}>  <li className={`fs-14 dim-whit fw5`}> Contact Us </li> </Link>
          <Link href={"/"}> <li className={`fs-14 dim-whit fw5`}>FAQS</li> </Link> 
          <Link href={"/service"}>  <li className={`fs-14 dim-whit fw5`}>Services </li> </Link>
          <Link href={"/package"}>    <li className={`fs-14 dim-whit fw5`}>Packages</li></Link>
          </ul>
            <div className="df gap11 mmt12 ">
           <Link href=""> <IoLogoWhatsapp className="dim-whit wb cursor" size={20}/> </Link>
           <Link href="">  <FaFacebook  className="dim-whit fb cursor" size={20}/> </Link>
           <Link href="">  <AiFillInstagram className="dim-whit insta cursor" size={20}/> </Link>
           <Link href="">  <MdMarkEmailUnread className="dim-whit mail cursor" size={20}/> </Link>
            </div>
            </div>
          <div className='df fjse fw pdtb10'>
          
          <p className="fs10 ls05 dim-whit ls05 mtac">  ©Copyright {currentYear} Worldwide Travel & Tourism - All rights reserved </p>
          <Link href="http://luzosacreations.in/"> <p className="fs10 dim-whit ls05 mpdt5">  Design And Developed By <span className='tau' > Luzosacreations </span></p> </Link>

          </div>
      </div>
    <style jsx>
        {`
       ul{
       list-style-type: circle;
       color: #ffffff;
       }
        .wb:hover{
        color: #25D366 !important;
        }

        .social-icon{
                padding: 10px 16px;
                border-bottom: 1px solid #FFFFFF99;
        }
        iframe{
        border-radius: 20px;
        border: 1px solid #fff;
        height: 208px;
        }
        .footer-bg{
        background-color: rgba(16, 12, 8, 0.9);
        overflow: hidden;
        padding-left: 20px;
        }
        .footer-logo{
        background: #fff;
          overflow: hidden;
        }
        .slot-btn{
        background: transparent;
        border-radius: 5px;
        padding: 10px 20px;
        border: 1px solid #d0ab17;
        transition: all 0.4s linear;

        }
        .slot-btn:hover{
        background: #d0ab17;
        color: #fff;
        }
        .footer-bottom{
         background-color: rgba(16, 12, 8, 0.9);
            border-top: 1px solid #FFFFFF99;
        }

        
        `}
    </style>
    </>
  )
}
