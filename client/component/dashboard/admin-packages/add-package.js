import moment from 'moment';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import DataTable from 'react-data-table-component';
import axios from 'axios';
import withAuth from '../PrivateRoutes/ProtectRoutes';

const AddPackage = ()=> {
  const [imagePreview, setImagePreview] = useState('');
  const [packages, setPackages] = useState([]);
  const [formData, setFormData] = useState({
    PackageName: '',
    Depature: '',
    MekkahHotelName: '',
    MadhinaHotelName: '',
    Price: '',
    image: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formPopup, setFormPopup] = useState(true);
  const fileInputRef = useRef(null);

  // Fetch packages on component mount

  useEffect(()=>{
    const fetchPackagesData = async ()=>{

      try {
        const response = await axios.get(`${process.env.url}/api/package/get-package`);
        
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching banner data:", error.message);
      }
    }
    fetchPackagesData();
  },[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddPackage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('PackageName', formData.PackageName);
    data.append('Depature', formData.Depature);
    data.append('MekkahHotelName', formData.MekkahHotelName);
    data.append('MadhinaHotelName', formData.MadhinaHotelName);
    data.append('Price', formData.Price);
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      data.append('image', fileInputRef.current.files[0]);
    }

    try {
      if (isEditing) {
        // Edit existing package
        const response = await axios.put(`${process.env.url}/api/package/update-package/${editIndex}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
        });
        console.log("Update response:", response.data);
        setPackages((prevPackages) =>
          prevPackages.map((pkg) => pkg._id === editIndex ? response.data.updatedPackage : pkg)
        );
      } else {
        // Add new package
        const response = await axios.post(`${process.env.url}/api/package/add-package`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
        });
        setPackages((prevPackages) => [...prevPackages, response.data]);
      }

      // Reset form and state
      setFormData({
        PackageName: '',
        Depature: '',
        MekkahHotelName: '',
        MadhinaHotelName: '',
        Price: '',
        image: '',
      });
      setImagePreview('');
      setIsEditing(false);
      setEditIndex(null);
      fileInputRef.current.value = null;
    } catch (error) {
      console.error("Error saving package:", error.message);
    }
  };

  const handleEditPackage = (packageData) => {
    setFormData({
      PackageName: packageData.PackageName,
      Depature: packageData.Depature,
      MekkahHotelName: packageData.MekkahHotelName,
      MadhinaHotelName: packageData.MadhinaHotelName,
      Price: packageData.Price,
      image: packageData.Image, // Store existing image URL
    });
    setImagePreview(packageData.Image); // Preview the existing image
    setIsEditing(true);
    setEditIndex(packageData._id);
  };
  const handlePopup = ()=>{
    setIsEditing(false);
        // Reset form and state
        setFormData({
          PackageName: '',
          Depature: '',
          MekkahHotelName: '',
          MadhinaHotelName: '',
          Price: '',
          image: '',
        });
  }
  const handleDeletePackage = async (packageId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this Packages ? ');
 if(isConfirmed){
    try {
      await axios.delete(`${process.env.url}/api/package/delete-package/${packageId}`,
        {withCredentials: true,});
      setPackages((prevPackages) => prevPackages.filter((pkg) => pkg._id !== packageId));
        // Reset form and state
        setFormData({
          PackageName: '',
          Depature: '',
          MekkahHotelName: '',
          MadhinaHotelName: '',
          Price: '',
          image: '',
        });
        fileInputRef.current.value = null;
        setImagePreview('');
        setIsEditing(false);

    } 

    catch (error) {
      console.error("Error deleting package:", error.message);
    }
  }
  };


 
  const columns = [
    {
      name: 'Package Image',
      selector: row => (
        <Image src={row.Image} width={50} height={50} alt='' loading='lazy' style={{ borderRadius: '5px' }} />
      ),
    },
    {
      name: 'Package Name',
      selector: row => row.PackageName,
    },
    {
      name: 'Departure Month',
      selector: row => moment(row.Depature).format('D MMM'),
    },
    {
      name: 'Makkah Hotel',
      selector: row => row.MekkahHotelName,
    },
    {
      name: 'Madinah Hotel',
      selector: row => row.MadhinaHotelName,
    },
    {
      name: 'Price',
      selector: row => `Rs ${row.Price}`,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <MdModeEditOutline size={24} onClick={()=>handleEditPackage(row)} className='cursor'/>
          <MdDelete size={24} onClick={()=>handleDeletePackage(row._id)} className='cursor'/>
        </>
      ),
    },
  ];

  return (
    <>
      <section className='container-fluid'>
        <div className='row mt-5'>
         <><div className='col-12 col-lg-4'>
          <h6 className='tac fs-19 fwb'>Add / Edit Packages</h6>
        <form className='form' onSubmit={handleAddPackage}>
              {/* Form fields */}
              <div className="row">
                <div className="col">
                  <input type="text" name="PackageName" required value={formData.PackageName} onChange={handleChange} className="form-control" placeholder="Package name" />
                </div>
                <div className="col">
                  <input type="date" name="Depature" required value={formData.Depature} onChange={handleChange} className="form-control" placeholder="Departure Month" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <input type="text" name="MekkahHotelName" required value={formData.MekkahHotelName} onChange={handleChange} className="form-control" placeholder="Makkah Hotel" />
                </div>
                <div className="col">
                  <input type="text" name="MadhinaHotelName" required value={formData.MadhinaHotelName} onChange={handleChange} className="form-control" placeholder="Madinah Hotel" />
                </div>
              </div>
              <div className="col mt-3">
                <input type="text" name="Price" required value={formData.Price} onChange={handleChange} className="form-control" placeholder="Package Price" />
              </div>
              <div className="col mt-3">
                <input type="file" required className="form-control" ref={fileInputRef}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      const fileURL = URL.createObjectURL(e.target.files[0]);
                      setImagePreview(fileURL); // Set new image preview on file change
                    }
                  } } />
                {isEditing && imagePreview && (
                  <div className="mt-2">
                    <Image
                      src={imagePreview}
                      width={100}
                      height={100}
                      alt="Preview"
                      style={{ borderRadius: '5px' }} />
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <button type="submit" className='btn-add cw fs-16 fw6'>{isEditing ? "Update Package" : "Add Package"}</button>
            {isEditing &&    <button type="submit" onClick={handlePopup} className='btn-add cw fs-16 fw6 mt-3'>Cancel</button> }
              </div>
            </form>
       
          </div><div className='col-12 col-lg-8'>
            <h6 className='fs-19 fwb tac'>Packages details </h6>
              <div className='table'>
                <DataTable
                  columns={columns}
                  data={packages}
                  pagination
                  responsive
                  highlightOnHover
                  noHeader // Prevent DataTable from adding its own header
                />
              </div>
            </div></>
   

        </div>
      </section>
      <style jsx>{`
       .form {
    border: 1px solid #e0e0e0;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .btn-add {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-add:hover {
    background-color: #218838;
  }
    .table{
    border: 1px solid #e0e0e0;
    padding: 20px;
    }

      
      `}</style>
    </>
  );
}

export default withAuth(AddPackage);
