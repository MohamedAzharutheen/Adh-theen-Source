import React from 'react'

export default function HajjGateway() {
  return (
  <>
  <section className='gateway-bg df pdtb20'>
  <div className="overlay"></div>
  <div className='container df fac '>
    <div className='content col-12 col-lg-6'>
    <h2 className='fs-40 mfs-24 fw7 cw'> <span className="logo-clr fwb"> Ath-Theen </span> Hajj </h2>
    <p className='fs22 ls025 mfs-19 cw fw5 pdt16'>Your Gateway to Unforgettable Adventures Awaits!</p>
    <p className='fs16 lnh27 ls05 mfs14 cw fw5 pdt24'>Step into a world of limitless possibilities with us. Your adventure starts here, where every journey is crafted just for you. Let us be your guide to unforgettable experiences!.</p>
    <div className='mt-5 df gap24 fw mfjc'>
    <button className='reg-btn pd10 fs-16 fwb '>Start Registration</button>
    <button className='enq-btn fs-16 pd10 cw fwb'>Register Assistance</button>
    </div>
    </div>

  </div>

  </section>
 <style jsx>
 {`
 .gateway-bg{
        background-image: url('/assets/images/dua-image.webp');
        width:100%;
        height: 500px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-position: cover;
        background-size: 100% 100%;
        position: relative;
        z-index: 1;
 }
        .reg-btn{
         background-color: #e9c751;
         border-radius: 10px;
         border: 1px solid #e9c751;
         transition: all 0.4s linear;

        }
         .reg-btn:hover{
          background-color: transparent;
          color: #fff;
         }
 .enq-btn{
          background-color: transparent;
         border-radius: 10px;
         border: 1px solid #e9c751;
         transition: all 0.4s linear;
 }
         .enq-btn:hover{
          background-color: #e9c751;
          border: 1px solid #e9c751;
          color: #000;
         }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7); /* Overlay with opacity */
          z-index: 1;
        }
        .content {
          position: relative;
          z-index: 2;
        }
        @media only screen and (max-width: 500px){
    .gateway-bg {
        height: auto;
      }

        }
 `}
 </style> 
  </>
  )
}
