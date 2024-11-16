// pages/admin/dashboard.js
import withAuth from '@/component/dashboard/PrivateRoutes/ProtectRoutes';
import DashboardLayout from './dashboard-layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
const [data,setData]=useState({
  galleryCount:"0",
  packageCount:"0"
})  

useEffect(()=>{
const fetchData = async ()=>{

 try {
  const response = await axios.get(`${process.env.url}/api/user/data-length`,{withCredentials:true});
  setData(response.data);
  setLoading(false);
 } catch (error) {
  console.log("Fetching Error",error);
  setLoading(false);
 } 

}
fetchData();
},[])
if (loading) {
  return <div>Loading...</div>;
}
  return (
    <>
   <DashboardLayout>
    <div className='container '>
      <div className=''>
      <h6 className='fs-24 tac mt-5 fwb '>Welcome to The Our <span className='fs-24 tac mt-5 fwb dim-ylw'> Admin Dashboard </span> </h6>
      <div className='row mt-5 justify-content-center'>
      <div className='col-12 col-lg-4'>
       <div className='bg-clr'>
         <p className='fs-30 tac'>Total Gallery Entries </p>
         <p className='fs-24 mfs-19  mt-3 tac cw fwb'>{data.galleryCount}</p>
       </div>
       </div>
       <div className='col-12 col-lg-4 mt-5 mt-lg-0'>
       <div className='bg-clr ' style={{backgroundColor:'#d0ab17'}}>
         <p className='fs-30 tac'>Total Packages </p>
         <p className='fs-24 mfs-19  mt-3 fwb tac cw'>{data.packageCount}</p>
       </div>
       </div>
      </div>
      </div>
    </div>
   </DashboardLayout>
   <style jsx>
    {`
    .bg-clr{
    background: #006c35;
    border-radius: 10px;
    height: 100%;
    padding: 20px;
    }
    
    `}
   </style>
   </>
  );
};

export default withAuth(Dashboard);
