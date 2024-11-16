import React, { useState } from 'react'
import { IoLocation } from "react-icons/io5";
import { GiCampingTent } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import RoomType from './room-type';
import MinaCamp from './mina-camp';
import Transportation from './transportation';
import AddtionalServices from './addtional-services';
import MasjidhulAlHaram from './masjidhul-al-haram';
export default function CategorySection() {
    const tabs = [
        { id: 'Al-Haram',icon:<IoLocation size={50} />, cnt: 'Near Al-Masjid Al-Haram', },
        { id: 'MinaCamp', icon:<GiCampingTent size={50}/>,  cnt: 'Mina Camp' },
        { id: 'RoomType', icon:<MdOutlineBedroomParent  size={50}/>,  cnt: 'Room Type' },
        { id: 'TransportationCities', icon:<MdEmojiTransportation size={50}/>,  cnt: 'Transportation Cities' },
        { id: 'AdditionalServices', icon:<CiCirclePlus size={50}/>,  cnt: 'Additional Services' },
    
    ]
    const [activeTab,setActiveTab] = useState(tabs[0].id)

  return (
    <>
    <section className='bg-clr'>
       <div className='container-fluid'>
          <h4 className={`fs-33 mfs24 ls05 tac fwb`}>Additional Factors that Differentiate Packages</h4>
          <p className={`fs-16 mfs14 ls05 lnh27 tac pdt8 `}>In addition to the previously outlined main factors, there are additional considerations that affect the selection and differentiation of Hajj packages.</p>
        <div className='tabs-container'> 
         <div className='df fjse mgap20'>
         {tabs.map((items,index)=>{
        return(
            <div key={index} className={`category tac mt40 cursor ${activeTab === items.id ? 'active' : 'dim-clr'}`}
            onClick={() => setActiveTab(items.id)}>

            <div className=''>
             <span className='cb'>{items.icon}</span>
            <p className='fs-19 '>{items.cnt}</p>
            </div>

            </div>
            )})}
         </div>
         </div>
         {activeTab === 'Al-Haram' &&  <MasjidhulAlHaram/>}
         {activeTab === 'RoomType' &&  <RoomType/>}
         {activeTab === 'MinaCamp' &&  <MinaCamp/>}
         {activeTab === 'TransportationCities' &&  <Transportation/>}
         {activeTab === 'AdditionalServices' &&  <AddtionalServices/>}


         {/* {activeTab === 'locatication' &&  <EducationForm style={'pdl24'} showStandart ={true} img={"/images/new-service/education-form/school-img.webp"}/> }
{activeTab === 'MinaCamp' &&  <EducationForm showStandart ={false} img={"/images/new-service/education-form/graduate-img.webp"}/>}
{activeTab === 'RoomType' &&  <EducationForm showStandart ={false} img={"/images/new-service/education-form/professional-img.webp"}/>}
{activeTab === 'TransportationCities' &&  <EducationForm showStandart ={false} img={"/images/new-service/education-form/professional-img.webp"}/>}
{activeTab === 'AdditionalServices' &&  <EducationForm showStandart ={false} img={"/images/new-service/education-form/professional-img.webp"}/>} */}
       </div>
    </section>
    <style jsx>
        {`
         .bg-clr{
          background: linear-gradient(180deg, rgb(214 178 33 / 81%) 0%, rgb(210 174 32 / 82%) 8%, rgba(255, 255, 255, 1) 100%);
          width: 100%;
          padding: 20px 5px;
         }

          .category{
           width: 220px;
           padding: 8px 16px;
           height: auto;
              
          }
        .clr{
        color: #b49164;
        }
        .active{
        background-color: #3A5A23;
        border: 1px solid #3A5A23;
         border-radius: 10px;
         
         
         
        }
         .active span{
         color: #FFFFFFD9;
         }
         .active p{
         color: #E8DAB2;
         } 
         @media only screen and (max-width: 1023px){
        .tabs-container {
        overflow-x: auto;
        white-space: nowrap;
        
        }
         .category{
           width: auto;
           padding: 8px 16px;
           margin-bottom: 10px;
              
          }
         }
        `}
    </style>
    </>
  )
}
