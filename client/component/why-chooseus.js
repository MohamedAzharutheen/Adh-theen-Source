import { Poppins, Quicksand } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import VideoBtn from './video-button';
export default function WhyChooseAthTheen() {
  return (
    <>
    <section className='bg-clr mt70 mmt40 df fjc fac'>
        <div className='container-fluid df fac fjc '>
        <div className='df fac mfac mfjc tfdc'>
           
           {/* Image Div */}
           <div className='w60p mwap'>
            <div className='why-bg-img pos-r mdf mfac mfjc'>
                <div className='img-box'>
               <Image className='img-dn' style={{width:'100%',height:'490px'}} src={"/assets/images/why-choose.png"} width={378} height={530} alt='Study-Girl-img' loading='lazy'/>
               <Image className='img-mdn img-mdb' src={"/assets/images/why-choose.png"} width={260} height={375} alt='Study-Girl-img' loading='lazy'/>

               </div>
               {/* Safe Guard */}
               <div className='safe-box df fjc fac pd10 mpd5 gap10'>
                  <Image src={"/assets/images/tour-guide.png"} width={35} height={35} alt='Safe-Guard-Icon' loading='lazy'/>
                  <p className={`fs-16 mfs-12  `}>Best Guidence</p>
               </div>
                  {/* Catalog */}
                  <div className='catalog-box df fjc fac pd10 mpd5 gap10'>
                  <Image src={"/assets/images/offer.png"} width={35} height={35} alt='Safe-Guard-Icon' loading='lazy'/>
                  <p className={`fs-16 mfs-12 `}>10+ Packages</p>
               </div>

               {/* Total Students */}
               <div className='total-stud pd10 df fac fjc gap5 mpd5 '>
               <Image className='pdt5 mpd2 total-icon-mdn' src={"/assets/images/banner/umrah.svg"} width={35} height={35} alt='Student-Imgs' loading='lazy'/>
               <Image className='pdt5 mpd2 total-icon-dn total-icon-mdb' src={"/assets/images/banner/umrah.svg"} width={35} height={35} alt='Student-Imgs' loading='lazy'/>
                <div className="">
                 <p className={`fs-16 mfs-12`}>Total Hajjis</p>
                 <p className={`fs-16 mfs-12`}>4000+</p>
                 </div>

               </div>
                {/* Quality Educations */}
                <div className='education-box df fjc fac pd10 mpd5 gap10'>
                  <Image src={"/assets/images/offer.png"} width={35} height={35} alt='Safe-Guard-Icon' loading='lazy'/>
                  <p className={`fs-16 mfs-12 `}>Affordable Packages</p>
               </div>
               <div className='video-btn-box'>
               <VideoBtn/>
               </div>
            </div>
            </div>
            {/* Content Div */}
            <div className='w40p mwap mmt40'>
            <h4 className={`fs-33 mfs-19  mtac `}>Why Choose <span className={`ylw-clr `}>Ath-Theen </span>  </h4>
             <p className={`fs16 lnh27 ls05 mt32 mmt20 `}>With years of experience, Ath-Theen ensures a seamless and spiritually fulfilling journey for pilgrims. We prioritize your comfort and convenience every step of the way.</p>
             {['Expert Guidance throughout your entire pilgrimage.','Affordable Packages tailored to your needs.','Top-Notch Accommodations near holy sites.','24/7 Support for a hassle-free experience.'].map((items,index)=>{
                return(
             <div className='df gap10 fac mt22'>
                     <Image  src="/assets/images/tick.svg" width={24} height={24} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-16 `}>{items}</p> 
                 </div>
                )
            })} 
            </div>

          </div>
        </div>
    </section>
    <style jsx>
        {`
        .bg-clr{
        background-color: #95EC98;
        padding: 100px 20px 100px 60px;
        height: 637px;
    
        }
        .why-bg-img{
        background-color: #F091EC;
        border-radius: 20px;
        width: 610px;
        height: 425px;
        }
         .img-box {
          position: absolute;
          top: 42.4%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
           
        .total-stud{
        background: #FFFFFF;
        border-radius: 10px;
        width: 172px;
        // z-index: ;
        position: absolute;
        top: 45%;
        left: -10%;

        }
        .safe-box{
        width: 191px;
        background: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        top: -20%;
        left: -1%;
        
        }
        .catalog-box{
         width: 191px;
        background: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        top: 23%;
        left: 84%;
        }
           .education-box{
         width: 244px;
        background: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        bottom: -14%;
        left: 50%;
         transform: translate(-50%, -50%);
        }
         .video-btn-box{
         position: absolute;
         top: 50%;
         left: 95%;
         }
               @media only screen and (max-width: 1300px){
      
      .tfdc{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      }
       .bg-clr{
        background-color: #95EC98;
        padding: 100px 0px 100px 0px;
        height: auto;
        display : flex;
        align-items: center;
        justify-content: center;
        
    
        }
        }

        `}
    </style>
    </>
  )
}
