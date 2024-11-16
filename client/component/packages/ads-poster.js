import Image from 'next/image'
import React from 'react'

export default function Adsposter() {
  return (
    <>
    <div className="sticky-1" id="online-course-registration">
    <div className="img-box5 mega-hover wow fadeInUp " data-wow-delay="0.3s">

<div className="img-1">
    <Image className="ads-img w100p"
        src={"/assets/images/ads-panner/apply-today-img.webp"} width={250} height={506} alt="About Img"/></div>

<div className="box-content">

    <h3 className="fs-33 fwb cw ">Online Umrah registration</h3>

    <p className="img-text pdt40 fs-19 cw lnh33 fw5">Affordable Hajj and Umrah Travel Packages with Premium Services</p>

    <button className="apply-btn cw mt40 ml40">Apply Today</button>

</div>
</div>
</div>
<style jsx>
    {`
   .apply-btn{
   background: #d0ab17;
   border: none;
   border-radius: 10px;
   padding: 10px 20px;
   }
    `}
</style>
    </>
  )
}
