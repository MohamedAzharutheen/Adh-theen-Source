import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
export default function AboutBlog() {
  return (
  <>
  <section className='container mt70'>
              <div className='row justify-content-center'>
               <div className='col-12  col-lg-4'>
                <h4 className='fs-40 fwb green-clr text-al'>Ath-Theen</h4>
                <p className='fs-18 mt-4 taj'>
                Since our founding in 2008, Ath-Theen has been dedicated to providing exceptional Hajj and Umrah services to pilgrims from around the world. With over a decade of experience, we understand the deep spiritual significance of these journeys and strive to ensure that every aspect of your pilgrimage is meticulously planned and executed, allowing you to focus on your worship and spiritual fulfillment.</p>
               </div>
                {/* Image Div */}
                <div className='col-12 col-lg-4 df fac fjc'>
               <div className='pos-r mmt40' >
                <Image className='mdn br20' src={"/assets/images/aboutus/about-blog.jpg"} style={{width:"350px",height:"550px"}} width={505} height={567} alt='' loading='lazy'/>
                <Image className='dn mdb br20'  src={"/assets/images/aboutus/about-blog.jpg"} style={{width:"auto",height:"auto"}} width={290} height={357} alt='' loading='lazy'/>

               <motion.div   animate={{ x: [0, -60, 0] }}
               className='happy-box-right'
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 10,
                  ease: 'easeInOut',
                }}
               
               >
               <p className={`fs-18 mfs-16 tac cb`}>10K</p>
               <p className={`fs-12 cb tac pdt4 fwb`}>successfull Students </p>
               </motion.div>
               
                <motion.div   animate={{ x: [0, 30, 0] }}
                className='happy-box-left pd10'
                 transition={{
                   repeat: Infinity,
                   repeatType: 'mirror',
                   duration: 10,
                   ease: 'easeInOut',
                 }}
               >
               <p className={`fs-18 mfs-16 tac cb`}>99%</p>
               <p className={`fs-12 cb tac pdt4 fwb`}>successfull Students </p>
               </motion.div>
               </div>
               </div>
               <div className='col-12 col-md-6 col-lg-4 pdt156 mpdt40'>
               <h4 className='fs-33 fwb green-clr text-al'>Hajj & Umrah Services</h4>
                <p className='fs-18 mt-3 mt-lg-5'>
                அத்-தீன் நிறுவனத்தில், நாங்கள் யாத்திரீகர்களுக்கு உயர்ந்த தரமான சேவையை நவீன வசதிகளுடன், இஸ்லாமிய மரியாதையை இணைத்து வழங்குகிறோம். 2008 ஆம் ஆண்டு தொடங்கி, ஹஜ் மற்றும் உம்ரா சேவையில் நம்பகமான பெயராக வளர்ந்துள்ளோம். போக்குவரத்து, தங்குமிடம், மற்றும் வழிகாட்டி உதவிகளை உள்ளடக்கிய விரிவான தொகுப்புகளை வழங்குகிறோம்.</p>
               </div>
               </div>
  </section>
  <style jsx>
    {`
    .hvz{
transition: all 0.4s linear;

}
.hvz:hover{
border: 1px solid #e9c751;
padding: 5px; 
border-radius: 50%;
}
    .text-al{
      letter-spacing: 2px;
      text-transform: uppercase;
      -webkit-font-smoothing: none;
      font-smooth: never;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
      
    }
    `}
  </style>
  </>
  )
}
