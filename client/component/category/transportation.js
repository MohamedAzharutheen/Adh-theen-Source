import React from 'react'
import { SiRailway } from "react-icons/si";
import { MdFlightTakeoff } from "react-icons/md";
import { FaBusAlt, FaCar } from "react-icons/fa";
export default function Transportation() {

   const transport =[
    {
        icon:<SiRailway  size={50} />,
        heading:"Haramain High-Speed Railway"
    },
    {
        icon: <MdFlightTakeoff size={50} />,
        heading:"Haramain High-Speed Railway"
    },
    {
        icon:<FaBusAlt size={50} />,
        heading:"Haramain High-Speed Railway"
    }
    ,
    {
        icon:<FaCar size={50}/>,
        heading:"Haramain High-Speed Railway"
    }
    
   ] 

  return (
    <>
    <section className='container-fluid'>
        <div className='mt-2 '>
           {['At Ath-Theen, we prioritize your comfort and convenience when traveling between the holy cities of Makkah and Madinah. The distance between these two cities is approximately 450 kilometers, a journey that typically takes up to 9 hours by bus, the standard mode of transportation included in most Hajj and Umrah packages. Our buses are equipped with modern features such as air conditioning, reclining seats, and onboard rest facilities, ensuring a smooth and comfortable journey throughout the long trip','Moreover, service providers For pilgrims seeking quicker or more luxurious alternatives, Ath-Theen also offers upgraded transportation options. These include domestic flights or the Haramain High-Speed Railway, a cutting-edge train service that significantly reduces travel time while offering comfort and punctuality. Whether by bus, flight, or rail, our transportation services adhere to a precise schedule, ensuring that your pilgrimage progresses smoothly between Makkah and Madinah.With Ath-Theen, every aspect of your journey is managed with care, allowing you to focus entirely on your spiritual experience while we handle the logistics of your travel.'].map((items,index)=>(
             
        <p className='fs18 lnh33 ls05 mfs-14 mlnh27 drk-clr fw5 pdt16'>{items}</p>

           ))}
        </div>
        <div className='mt20 df fjse fw '>
            {transport.map((items,index)=>{
                return(
         <div className='df fdc fac mt-4' key={index}> 

        <span className='drk-clr'> {items.icon} </span>  
        <p className='fs-16 mfs-16 cb fwb pt-4'>{items.heading}</p>
        </div>
        )
    })}
        </div>
    </section>
    </>
  )
}
