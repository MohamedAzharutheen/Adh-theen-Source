import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import {MdModeEditOutline } from "react-icons/md";
import withAuth from '../PrivateRoutes/ProtectRoutes';
const AddBanner = ()=> {


  const [banner,setBanner]=useState([]);
  const [selectedBanner, setSelectedBanner] = useState(null);
 const [popup,setPopup]=useState(false);
 const [formData,setFormData]=useState({
  PackageName:"",
  Price:"",
  Depature:""
 })

 // Fetch banner data

 useEffect(()=>{
 const fetchBannerData = async()=>{

  try {
    const response = await axios.get('http://localhost:5000/api/banner/get-banner');
    setBanner(response.data);
//  Set only the first banner item in the state
 if(response.data.length > 0){

  setBanner([response.data[0]]);
 }
 else {
  setBanner([])
 }

  } catch (error) {
    console.error("Error fetching banner data:", error.message);
  }

 };
 fetchBannerData();
   
 },[])



const handleInputChnage =(e)=>{
const {name,value}=e.target;
setFormData({...formData,[name]:value});
}

const handleEditClick = (row) => {
  setSelectedBanner(row);
  setFormData({
    PackageName: row.PackageName,
    Depature: row.Depature,
    Price: row.Price,
  });
  setPopup(true);
};

const handleUpdateBanner = async (e)=>{
e.preventDefault();
 // Validate form data
 if (!formData.PackageName || !formData.Price || !formData.Depature) {
  alert("Please fill all fields.");
  return;
}
try {
  const response = await axios.put(`${process.env.url}/api/banner/update-banner/${selectedBanner._id}`, formData, 
  { withCredentials: true })
  console.log("Selected Banner ID:", selectedBanner?._id);
  alert(response.data.message);
  setPopup(false);
  const updatedBanners = await axios.get(`${process.env.url}/api/banner/get-banner`,{ withCredentials: true });
      setBanner(updatedBanners.data);
} catch (error) {
  console.error("Error updating banner:", error.message);
      alert("Failed to update the banner.");
}
}



  return (
    <>
      <section className='mt70 container'>
        <h6 className='fs-24 tac logo-clr fwb'>Update Module Banner</h6>
        <div className='row mt-5 df fjc'>
          {popup &&(
          <div className='col-12 col-lg-4'>
            <form onSubmit={handleUpdateBanner}>
              <div className="row ">
                <div className="col">
                  <input type="text" name='PackageName' value={formData.PackageName} onChange={handleInputChnage}
                   className="form-control" placeholder="Package name" />
                </div>
                <div className="col">
                  <input type="date" name='Depature' value={formData.Depature} onChange={handleInputChnage}
                   className="form-control" placeholder="Departure Month" />
                </div>
              </div>
              <div className="col mt-3">
                <input type="text" name='Price' value={formData.Price} onChange={handleInputChnage}
                 className="form-control" placeholder="Package Price" />
              </div>
              <div className='mt16'>
                <button className='btn-add cw fs-16 fw6'>Update Banner</button>
                <button className='btn-cncl cw fs-16 fw6 mt24' onClick={()=>setPopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
          )}
          <div className='col-12 col-lg-8 '>
       <div className='df fjc'>
       {banner.length > 0 ? (
                banner.map((item) => (
                  <div key={item._id} className='package-card pdtb10'>
                    <div className='head pdtb5'>
                      <Image src={"/assets/images/logos/logo.svg"} width={80} height={80} alt='Logo' loading='lazy' quality={100} />
                    </div>
                    <div className='insd-card pdtb20'>
                      <h4 className='fs-24 fwb mb20 cw'>{item.PackageName}</h4>
                      <p className='fs-16 cw mb20 fwb'>{item.Depature}</p>
                      <p className='fs-19 fwb pdt20' style={{ color: '#fcc305' }}> ₹ {item.Price} /-</p>
                    </div>
                    <button className='edit-btn fs-16 mt20 fwb' onClick={() => handleEditClick(item)}><MdModeEditOutline /> Edit Banner</button>

                  </div>
                ))
              ) : (
                <p>No banners available.</p>
              )}
        </div>
    </div>
        </div>
      </section>
      <style jsx>
        {`
          .btn-add {
            background: #006c35;
            border: none;
            padding: 10px;
            width: 100%;
          }
              .btn-cncl {
            background: #d0ab17;
            border: none;
            padding: 10px;
            width: 100%;
          }

    .edit-btn{
    border: none;
    border-radius: 8px;
    padding: 5px 20px;
    background: #d0ab17;
    width: 100%;
    }
        .icon-bg{
        background-color: #006C35;
        border-radius: 10px 10px 0px 0px;
        }
        .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -15px;
        left: 95%;
        }
        .head{
        background-color: #ffffff;
        width: 100%;

        }
        .package-card {
         
            width: 360px;   
            border-radius: 12px;
            background-color: #fff;
            box-shadow: 10px 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }
        .insd-card{
        background-color: #006C35;
        // background-image: url('/assets/images/packages/package-card-bg.png');
        width: 100%;
        
        }
        .package-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        
        .card-subtitle {
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

                @media only screen and (max-width: 420px){
         .package-card {
            width: 290px;   
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }
      .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 3px;
        top: -13px;
        left: 94%;
        }
        } 
        `}
      </style>
    </>
  );
}

export default withAuth(AddBanner);
