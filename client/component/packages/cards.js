import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { PiUsersThreeBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Adsposter from './ads-poster';
import moment from 'moment';

export default function Cards({packageData}) {

  
  return (
   <>
   <section className="mt70 container mb40">
      <h4 className="fs-33 mfs24 mlnh41 ls1 fw7 tac">Umrah &Hajj Packages 2024-2025</h4>
      <p className="fs-16 dim-clr pdt24 tac">We provide you with a wide range of Umrah packages from all over India.</p>
   
   <div className="row mt-5">
   <div className="col-12 col-md-12 col-lg-8">

    <div className='row'>
    {packageData &&  packageData.length > 0 ?(
  packageData.map((items,index)=>(
    <div className="col-12 col-md-6 col-lg-6 mt-3"  key={index}>

        <div className='package-card cursor'>
           <div className='pos-r'>
            
           <div className="overlay"></div>

            <Image className=" pos-r" style={{width:"100%" }} src={items.Image} width={390} height={242} alt={`-Image`} loading="lazy" quality={100}/>

             <p className="image-title fs-16  ">{moment(items.Depature).format('Do MMM')}</p>
             {/* <div className="days">
               <h6 className=""></h6>
             </div> */}
           </div>

           <div className="pd10">
            <h6 className="fs-22 lnh33  fw5 mfs-19 pkg-name">{items.PackageName}</h6>
            <div className="df gap8 mt24">
                <p className ="fs-16 fw5">Makkah : </p>
                <span className="fs-16 fwb green-clr">{items.MekkahHotelName}</span>
            </div>
            <div className="df gap8 mt10">
                <p className ="fs-16 fw5">Madhina : </p>
                <span className="fs-16 fwb green-clr">{items.MadhinaHotelName}</span>
            </div>
            <div className="place-area mt32">
               <ul className="place-list text-animation">
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                </ul>  
            </div>
            <div className="Price-details mt32 df fac ">
                 <div className="">
                <p className="fs-12 fw4 text-capitalize dim-clr">Starting From</p>
                <h4 className="fs-22 fw7  mfs-19 green-clr pdt8">₹{items.Price} </h4>
                </div>
                <p className="fs-12 fw4 text-capitalize dim-clr pdt20">Per Person</p>
                <div className="pdl16 mt16">
                    <button className="fs-14 fw5 cw book-now-btn ">Book Now</button>
                </div>
            </div>
           </div>
         
        </div>
       
    </div>
   ))
  ): (
   <p>No packages available.</p>
  )}  
    </div>
    </div>
     <div className='col-12 col-md-12 col-lg-4'>
     <Adsposter/>

     </div>

   </div>
    
   </section>
   <style jsx>
    {`
.pkg-name{
height: 100px;
}
        .mega-hover {
	position: relative;
	overflow: hidden;
  }
  .mega-hover .ads-img {
	transition: all 2s ease;
	transform: scale(1);
  }
  .mega-hover:after, .mega-hover:before {
	content: "";
	position: absolute;
	pointer-events: none;
	opacity: 1;
	z-index: 3;
	transform: rotate(5deg);
  }
  .mega-hover:before {
	top: -10%;
	right: 51%;
	bottom: -10%;
	left: 50%;
	background: rgba(255, 255, 255, 0.3);
  }
  .mega-hover:after {
	top: 50%;
	right: -10%;
	bottom: 50%;
	left: -10%;
	background: rgba(255, 255, 255, 0.6);
  }
  .mega-hover:hover:before {
	left: 0;
	right: 0;
	opacity: 0;
	transition: all 900ms linear;
  }
  .mega-hover:hover:after {
	top: 0;
	bottom: 0;
	opacity: 0;
	transition: all 900ms linear;
  }
  .mega-hover:hover .ads-img {
	transform: scale(1.05);
  }
  
    .package-card{
    border: 1px dashed rgba(208, 171, 23, .5);
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    padding: 10px;
    // height: 600px;
    }
        /* Full rgba black background */
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
         background: rgba(16, 12, 8, 0.3);
      z-index: 1;
      border-radius: 20px;
    }
        .image-title {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    // background-color: rgba(0, 0, 0, 0.5);
    background-image: url('/assets/images/packages/scratch-1.svg');
    background-repeat: no-repeat;
    color: white;
    width: 100%;
    padding: 10px;
    z-index: 222;

    }
        .days{
    position: absolute;
    top: 85%;
    left: 50%;
    width: 80%;
    transform: translateX(-50%);
    background-color: rgba(16, 12, 8, 0.6);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
    }
    .book-now-btn{
    background: #d0ab17;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    
    }
    .place-area{
    position: relative;
    height: 18px;
    overflow: hidden;

    }
    .place-list{
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    transform: translateX(0);
    transition: 6s;
    display: flex;
    align-items: center;
    gap: 20px;
    scroll-behavior: smooth
    }
    ul{
    padding-left: 0px;
    }
    .place-list li{
    line-height: 1;
    position: relative;
    transition: 0.5s;
    }
.place-area:hover .text-animation {
    transform: translateX(calc(200px - 100%));
}

    
    `}
   </style>
   </>
  )
}
