import { Poppins, Quicksand } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
export default function Faqs({FaqQus}) {
    const [activeIndex, setActiveIndex] = useState(null);
    // Initialize arrowRotation with an array of false values
  const [arrowRotation, setArrowRotation] = useState(new Array(FaqQus.length).fill(false));
  const handleAccordionClick = (index) => {
  setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  setArrowRotation((prevRotation) =>
  prevRotation.map((rotated, i) => (i === index ? !rotated : rotated))
  );
  };
 

  return (
   <>
   <section className='bg pdb50 mpdb10'>
    <div className='pdt48 mpdt24'>
    <div className='container '>
    <h4 className={`fs-33 mfs-19 mtac fwb tac green-clr`}> <span className={`logo-clr fwb`}> Frequently   </span> Ask Questions </h4>
        <div className='df mt70 mfdc mfjc  mmt32 '>
        <div className='w40p df fac mdn' style={{ position: 'relative', width: '100%', height: 'auto' }}>
    <Image 
        src={"/assets/images/faq/clock.svg"} 
        alt='Faq-img'
        className="mdn"
       style={{width:"100%",height:'auto'}}
       width="550"
       height="550"
        loading='lazy'
    />
</div>
       <div className='mmt20 df fdc pdl50 mpdl0  mfac'>
        {FaqQus.map((items, index) => (
            <div key={index} className=''>
    <div className='accord-box mt16' onClick={() => handleAccordionClick(index)}>
       <div className='df fac fjsb cursor'>
         <h4 className={`fs-16 lnh30 ls05 mfs-15`}>{items.qus}</h4>
         <div className={`${arrowRotation[index] ? 'rotate-arrow' : ''} fac`}  onClick={(e) => {
                            e.stopPropagation();
                            handleAccordionClick(index);
                            }}>
           <IoIosArrowDropdown size={24} className='logo-clr'/>
         </div>
       </div>
       {index === activeIndex && (  
<div>
    <p className={`fs14 lnh27 ls05 mt16 mfs-14 `}>{items.ans}</p>
</div>                
      )}
    </div>
    </div> ))}
    </div>
    </div>
    </div>
    </div>
   </section>   
   <style jsx>
    {`

     .bg {
        width: 100%;
        height:100%;
        
      }
     .circle-set{
        font-size:9px;
        display:flex;
        align-items: center;
        padding-right:10px;
        color: #FFA900;
    }
    .line-code{
        width:656px;
        margin: 24px 0px 24px 0px;
        border: 1.5px solid;
        background: linear-gradient(270deg, #FFFFFF -12.37%, #FFA900 53.79%, rgba(255, 255, 255, 0) 113.84%);
        border-image-slice: 1;
        border-image-width: 1.5px;
        border-image-outset: 0;
    border-image-source: linear-gradient(270deg, #FFFFFF -12.37%, #FFA900 53.79%, rgba(255, 255, 255, 0) 113.84%);
    }
    
        .accord-box{
            width: 630px;
            border-radius: 50px;
            padding: 14px;
            border: 0.5px solid #FFA900;
            box-shadow: 0px 4px 16px 0px #FFA90040;
            background-color: #FFFFFF;            
        } 
        .rotate-arrow {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
        }
        @media only screen and (max-width: 350px){
            .accord-box {
                width: 285px;
                padding: 10px;
                border-radius: 20px;
                border: 0.5px solid #ffa900;
                background-color: #ffffff;
                box-shadow: 0px 1px 4px 0px #ffa90040;
            }
            .top-cate {
              background-color: #ffffff;
              width: 100%;
              height: 70px;
              border: 1px solid #fdbb39;
              border-radius: 46px;
              box-shadow: 0 8px 46px 0 rgba(253, 187, 57, 0.3);
            }
            .bg {
              width: 100%;
              margin-bottom:40px;
              height: 100%;
            }
            .line-code{
                width:100%;
                margin: 24px 0px 24px 0px;
                border: 1.5px solid;
                background: linear-gradient(270deg, #FFFFFF -12.37%, #FFA900 53.79%, rgba(255, 255, 255, 0) 113.84%);
                border-image-slice: 1;
                border-image-width: 1.5px;
                border-image-outset: 0;
            border-image-source: linear-gradient(270deg, #FFFFFF -12.37%, #FFA900 53.79%, rgba(255, 255, 255, 0) 113.84%);
            }
        }
       @media only screen and (max-width:1250px){
       .mdn{
       display: none !important;
       }

      //  .w60p{
      //  width: 0%;
      //  }
       }

        @media only screen and (min-width: 350px) and (max-width:1023px){
          .accord-box {
              width: 335px;
              padding: 10px;
              border-radius: 20px;
              border: 0.5px solid #ffa900;
              background-color: #ffffff;
              box-shadow: 0px 1px 4px 0px #ffa90040;
          }
          .top-cate {
            background-color: #ffffff;
            width: 100%;
            height: 70px;
            border: 1px solid #fdbb39;
            border-radius: 46px;
            box-shadow: 0 8px 46px 0 rgba(253, 187, 57, 0.3);
          }
          .bg {
            width: 100%;
            margin-bottom:40px;
            height: 100%;
          }
          .line-code{
              width:100%;
              margin: 24px 0px 24px 0px;
              border: 1.5px solid;
              background: linear-gradient(270deg, #FFFFFF -12.37%, #FFA900 53.79%, rgba(255, 255, 255, 0) 113.84%);
              border-image-slice: 1;
              border-image-width: 1.5px;
              border-image-outset: 0;
          border-image-source: linear-gradient(270deg, #FFFFFF -12.37%, #FFA900 53.79%, rgba(255, 255, 255, 0) 113.84%);
          }
      }
    

    
    `}
   </style>
   
   </>

  )
}
