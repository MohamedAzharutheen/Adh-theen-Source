import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EnquiryForm from '../popup-form';
import ScrollAnimation from '../animation/scrolling-animations';
export default function Banner() {

  const [popup,setPopup]=useState(false);

  const handleClick =()=>{
    setPopup(!popup);
  }

  const handleFormClose = () => {
    setPopup(false);
};
  return (
    <>
    <section className='bg-img pdb50 mpdb25'>
     <div className='container'>
   <div className='df fjsa fac  pdt40 mfdc '>
    <div className='w50p mw100p mb40'>
    <ScrollAnimation direction="left" delay={0.1}>
      <h4 className={`fs-33 lnh55  fwb`}>Book Your <span className='green-clr fwb '> Hajj & Umrah </span>  with Our Trusted Service</h4>

      <p className={`fs19 lnh33 mfs16 mlnh27 mt32`}>Embark on a sacred journey to Makkah and Madinah with <strong> Ath-Theen </strong> all-inclusive Hajj and Umrah packages. Experience the profound spirituality of performing the rituals in the heart of Islam's holiest cities, with expert guidance and personalized services from <strong> Ath-Theen </strong> ensuring a smooth, fulfilling pilgrimage.</p>
      <div className="mt50">
         <button onClick={handleClick} className={` btn-box cursor fs-16 cw`}>Reach Out to Us</button> 
       </div>
       </ScrollAnimation>


    </div>
    <div className='pos-r'>
    <ScrollAnimation duration={1} direction="right" delay={0.8}>
             <Image className='mdn' src={"/assets/images/banner/hajj.png"} width={480} height={574}  alt='Lady-img' quality={100} loading='lazy'
               style={{ width: '500', height: 'auto' }}/>
             <Image className='dn mdb' src={"/assets/images/banner/hajj.png"} width={290} height={374}  alt='Lady-img' quality={100} loading='lazy'/>
    </ScrollAnimation>
  {/* Animated Active Box - Left */}

  <motion.div
                className="active-box-left pd10"
                animate={{ y: [0, -40, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 10,
                  ease: 'easeInOut',
                }}
              >
                <div className='df fac gap10'>
                    <Image src={"/assets/images/banner/kaaba.svg"} width={30} height={30} alt='User-Icon' loading='lazy'/>
                <p className={`fs-18 mfs-16 fw6`}>2000+</p>
                </div>
            <p className={`fs-12 drk-dim tac pdt6`}>Hajj Service</p>
            </motion.div>

         {/* Animated Active Box - Left */}
  <motion.div
                className=" active-box-right pd10"
                animate={{ y: [0, -40, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 10,
                  ease: 'easeInOut',
                  delay: 4
                }}
              >
            <div className='df fac gap10'>
                <Image src={"/assets/images/banner/umrah.svg"} width={30} height={30} alt='User-Icon' loading='lazy'/>
              <p className={`fs-18  mfs-16 fw6`}>3500+</p>
            </div>
            <p className={`fs-12 drk-dim tac pdt6 `}>Umrah Service</p>
        </motion.div>
        </div>
 
   </div>

   </div>

    </section>
    {popup && <EnquiryForm close={handleFormClose}/>}
    <style jsx>
        {`
                .bg-img{
            width:100%;
            height: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-position: cover;
            background-size: 100% 100%;
           overflow:hidden;
        }
         .btn-box { 
              padding: 10px;
              border-radius: 10px;
              background-color:#FFA900;
              // background-color:#EF90EB;
              border: none;
              transition: all 0.4s ease-in-out;
              width: 400px;
               
        }


           
              @media only screen and (max-width: 1250px){
              .tfdc{
              display: flex;
              flex-direction: column;
              align-items: center;
              }
                         .card{
              background-color: #FFFFFF;
              border-radius: 10px;
              box-shadow: 0px 4px 16px 0px #00000040;
              width: 500px;
              }
              }
                 @media only screen and (max-width: 500px){
                       .btn-box { 
              padding: 10px;
              border-radius: 10px;
              background-color:#FFA900;
              border: none;
              transition: all 0.4s ease-in-out;
              width: 100%;
               
            }
              .fs-45{
                font-size: 24px;
                line-height: 41px;
                letter-spacing: 1px;
              }
          .bg-img{
             background-position: center;
                background-repeat:no-repeat;
             padding-top: 0%;
                 height:100%;
overflow:hidden;
        }
   

              }

        `}
    </style>
    
    </>
  )
}
