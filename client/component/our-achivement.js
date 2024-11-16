import Lottie from 'lottie-react';
import React from 'react'
import Care from '../public/assets/images/animation-icons/care.json';
import Transport from '../public/assets/images/animation-icons/transport.json';
import Statisfied from '../public/assets/images/animation-icons/statisfied.json';

export default function OurAchivement() {

    const AchiveData = [
        {
            icon:"",
            anim:Care,
            title:"Personal care and guidance ",
            width:"100px",
            height:"100px"
        },
        {
            icon:"",
            anim:Transport,
            title:"Comfortable transportation",
            width:"100px",
            height:"100px"
        },
        {
            icon:"",
            anim:Statisfied,
            title:"Customer satisfaction",
            width:"200px",
            height:"100px"
        },
    ]


  return (
    <>
    <section className='container'>
  <div className='mt70 mmt25'>
    <h4 className={`fs-33 mfs-19 mtac fwb logo-clr`}>Start Planning  <span className={` green-clr fwb`}> Your Journey </span> </h4>
        <p className='fs-18 pdt8'>Everything you need to know to start planning your journey to Makkah and Madinah.</p>
        <div className='mt32 mmt2'>
            <div className='df gap20 mfw'>

                {AchiveData.map((items,index)=>{
                    return(

             <div className='col-12  col-lg-4 box cursor mmt24' key={index}>
                 <div className='df fac fjc pdtb30 mpdtb15 gap16'>
                   <div className='df fdc fac'>
                 {items.anim &&(  <Lottie animationData={items.anim} loop={true} style={{width:items.width,height:items.height}}/>
                 )}
                    <p className={`fs-19 dim-clr fwb`}>{items.title}</p>
                   </div>
                  </div>
                  </div>
                  )
                })}
             </div>
        </div>
        </div>
    </section>
    <style jsx>
        {`
        .box{
        box-shadow: 0px 4px 14px 0px #00000038;
        // width: 400px;
        border-radius: 8px;
        transition: all 0.4s linear;
        }
        .box:hover{
        transform: translateY(-10px);
        }
        `}
    </style>
    </>
  )
}
