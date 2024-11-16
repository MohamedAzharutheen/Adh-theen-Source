import Link from 'next/link'
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
export default function TopHeader() {
  const SociaIcons = [
    { 
    icon:<IoLogoWhatsapp className="wb-icon" color="#25D366" size={20}/>,
    path:"",
    name:"wb"
    },
    { 
    
      icon:<FaFacebook  color="#1877F2" size={20}/>,
      path:"",
      name:"fb"
      },
    { 
    
    icon:<AiFillInstagram color="#E1306C" size={20}/>,
    path:"",
    name:"insta"
    },
    { 
    
    icon:<MdMarkEmailUnread color="#D93025" size={20}/>,
    path:"",
    name:"mail"
    }
   ]
  return (
    <>
    <section className='top-header'>
        <div className='container'>
         <div className='df fjsb fac '>
          <div className="df gap11">
              <p className="fs-14 fwb">ContactUs :</p>
              <div className='df fac gap11'>
              <FaPhoneVolume size={20} color='#4CAF50'/>
              <Link href="tel:+91 81242 89972"><p className="fs-12 fw6">+91 950077 1134</p></Link>
              </div>
          </div>
        {/* <Link href={"/"}><p className='fs-14 fwb '>Contact Us :  <span className='fs-12 fw6 pdl5'> <FaPhoneVolume size={20} color='#4CAF50'/> +91 8124289972</span> </p></Link> */}
        <Link href={"/"}><p className='fs-14 fwb df fac gap5'>Social Media:
         {SociaIcons.map((items,index)=>(
              <span key={index} className={`df gap8 pdl16 ${items.name}`}>{items.icon}</span> ))} </p></Link>
             
           
         </div>
        </div>
    </section>
    <style jsx>
        {`
        .top-header{
        padding : 4px 0px;
         background: rgba(255, 255, 255, 1);
        }
        .wb{
        border: 1px solid #25D366;
        border-radius: 20px;
        padding: 5px;
        transition : all 0.4s linear;
        }
        .wb:hover{
        border: 1px solid transparent;
        }
           .fb{
        border: 1px solid #1877F2;
        border-radius: 20px;
        padding: 5px;
        transition : all 0.4s linear;
        }
         .fb:hover{
        border: 1px solid transparent;
        }
        .insta{
        border: 1px solid #E1306C;
        border-radius: 20px;
        padding: 5px;
        transition : all 0.4s linear;
        
        }
        .mail{
        border: 1px solid #D93025;
        border-radius: 20px;
        padding: 5px;
        transition : all 0.4s linear;
        }
          .insta:hover{
        border: 1px solid transparent;
        }
          .mail:hover{
        border: 1px solid transparent;
        }
        @media only screen and (max-width: 525px){
        .top-header{
        display: none;
        }
        }
        `}
    </style>
    
    </>
  )
}
