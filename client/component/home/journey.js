import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Journey() {
  return (
    <>
    <section className='journey-bg mt70 pdtb50'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-6'>
                <Image className='br20 mdn' src={"/assets/images/journeys.jpg"}style={{width:"550px",height:"auto"}} width={200} height={200} alt='Journey-Img' loading='lazy'/>   
                <Image className='br20 dn mdb' src={"/assets/images/journeys.jpg"}style={{width:"100%",height:"auto"}} width={200} height={200} alt='Journey-Img' loading='lazy'/>   
             </div>
            <div className='col-12 col-md-12 col-lg-6 df fdc fjc mpdt24'>
                <h4 className={`fs33 lnh50 mfs24 mlnh41 fw5`}> <span className="logo-clr fwb"> Ath-Theen  </span> <span className='green-clr fwb'>Hajj & Umrah </span> -  Your Gateway To The Journey Of Alife Time</h4>
                <p className='fs19 lnh33 mfs-14 mlnh27 mt-1 drk-clr'>Explore the potential of Ath-Theen, the innovative experiences as you craft your ideal Hajj or Umrah schedule to the holy cities of Makkah, Madinah, and beyond. With Ath-Theen,applying for an eVisa to securing accommodations and flights. </p>
                <p className='fs-19 lnh33 mfs-14 mlnh27 mt-3 drk-clr'>Looking ahead, Ath-Theen will transform your pilgrimage by allowing you to arrange visits to notable sites, find transportation, design personalized agendas, and utilize essential on-ground tools like the Tawaf tracker and much more!</p>
               <div className='mt-4 df gap20'>
             <Link href={"/package"}>  <button className='enquiry-btn  cw fs-19 mfs-16 fw5'>Our Packages</button> </Link>
               <Link href={"tel: 8124289972"}> <button className='enquiry-btn fs-19 mfs-16 cw drk-clr fw5'>Get Instant Call</button> </Link>
               </div>
            </div>
          </div>
        </div>
    </section>
    <style jsx>
        {`
        .journey-bg{
          // background: #3A5A23;
//  background: linear-gradient(to bottom, #6f8a55, #eaf3e3);
          width: 100%;
        }
        .enquiry-btn{
        background: #006c35;
  border: 2px solid #006c35;
         border-radius: 10px;
         padding: 5px 15px;
         transition: all 0.3s linear;
        }
         .enquiry-btn:hover{
         color: #006c35;
         border: 2px solid #006c35;
         background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%);
         }
        `}
    </style>
    </>
  )
}
