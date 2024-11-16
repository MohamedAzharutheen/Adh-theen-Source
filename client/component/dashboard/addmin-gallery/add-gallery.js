// import moment from 'moment';
// import Image from 'next/image';
// import React, { useState, useRef, useEffect } from 'react';
// import { MdDelete, MdModeEditOutline, } from "react-icons/md";
// // import DataTable from 'react-data-table-component';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';
// import { FaRegEye } from 'react-icons/fa';
// import { IoIosCloseCircleOutline } from 'react-icons/io';
// import Gallery from '@/component/gallery/light-house';

// export default function AddGallery() {
//   const [imagePreview, setImagePreview] = useState([]);
//   const [isModalOpen,setIsModalOpen]=useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(null); // State for selected gallery index
//   const [gallery, setGallery] = useState([]);
//   const [renderTrigger, setRenderTrigger] = useState(false);
//   const [prevDispl, setPrevDispl] = useState(false);
//   const [formData, setFormData] = useState({
//     Title: '',
//     images: [],
//     imagesToDelete: [],
//     imagesToKeep:[],
    
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.url}/api/gallery/get-gallery`);
//         setGallery(response.data);
//         console.log("Gallery data fetched:", response.data);
//       } catch (error) {
//         console.error("Error fetching gallery data:", error.message);
//         if (error.response) {
//           // If the error has a response, it means the server responded with an error status code
//           console.error("Server responded with:", error.response.status, error.response.data);
//         } else if (error.request) {
//           // If the error has a request but no response, it means the request was made but no response received
//           console.error("No response received from server");
//         } else {
//           // Otherwise, an unknown error occurred
//           console.error("Unexpected error:", error.message);
//         }
//       }
//     };
//   fetchData();
// },[])

// const openModal = (index)=>{
//   setIsModalOpen(true);
//   setSelectedIndex(index)
// }
// const closeModal = () => {
//   setIsModalOpen(false);
//   setSelectedIndex(null);
// };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   // const handleEditGallery = (index) => {
//   //   console.log("indexedit",index)
//   //   console.log("gallery",gallery)
//   //   const galleryItem = gallery[index];
//   //   setFormData({
//   //     Title: galleryItem.Title,
//   //     imagesToKeep: galleryItem.Images, // Keep existing images
//   //     imagesToDelete: [], // Initialize empty for images to delete
//   //     images: [] // Initialize empty for new images
//   //   });
//   //   console.log("fm",formData)
//   //   setImagePreview(galleryItem.Images); // Add existing images to preview
//   //   setIsEditing(true);
//   //   setEditIndex(index);
//   //   console.log("Prev Imgs",galleryItem.Images) 
//   // };
// //   const handleDeleteImagePreview = (index) => {
// //     const deletedImage = formData.imagesToKeep[index];
    
// //     setFormData((prev) => {
// //       const updatedImagesToKeep = prev.imagesToKeep.filter((_, i) => i !== index);
// //       const updatedImagesToDelete = [...prev.imagesToDelete, deletedImage];
// //       return {
// //         ...prev,
// //         imagesToKeep: updatedImagesToKeep,
// //         imagesToDelete: updatedImagesToDelete,
// //       };
// //     });
// //     console.log("imagesToKeep:", formData.imagesToKeep);
// // console.log("imagesToDelete:", formData.imagesToDelete);
// // setImagePreview((prev) => prev.filter((_, i) => i !== index)); // Remove image from preview as well
// // };
  

// const handleEditGallery = (index) => {
//   const galleryItem = gallery[index];
//   setFormData({
//     Title: galleryItem.Title,
//     imagesToKeep: galleryItem.Images, // Existing images to keep
//     imagesToDelete: [], // Initialize empty for images to delete
//     images: [] // Initialize empty for new images
//   });

//   // Reset and set preview with only imagesToKeep
//   setImagePreview([]); // Clear previous previews
//   setImagePreview(galleryItem.Images); // Show only imagesToKeep in preview
//   setIsEditing(true);
//   setEditIndex(index);
// };

// // const handleDeleteImagePreview = (index) => {
// //   // Ensure imagesToKeep is defined before filtering
// //   if (!formData.imagesToKeep) {
// //     return;
// //   }

// //   const deletedImage = formData.imagesToKeep[index];
// //   setFormData((prev) => {
// //     const updatedImagesToKeep = prev.imagesToKeep.filter((_, i) => i !== index);
// //     const updatedImagesToDelete = [...prev.imagesToDelete, deletedImage];

// //     return {
// //       ...prev,
// //       imagesToKeep: updatedImagesToKeep,
// //       imagesToDelete: updatedImagesToDelete,
// //     };
// //   });

// //   // Update the image preview separately
// //   setImagePreview((prev) => prev.filter((_, i) => i !== index));
// //   setRenderTrigger((prev) => !prev); // Trigger re-render
// // };


// const handleDeleteImagePreview = (index, type) => {
//   if (type === "keep") {
//     const deletedImage = formData.imagesToKeep[index];
//     setFormData((prev) => ({
//       ...prev,
//       imagesToKeep: prev.imagesToKeep.filter((_, i) => i !== index),
//       imagesToDelete: [...prev.imagesToDelete, deletedImage],
//     }));
//     setImagePreview((prev) => prev.filter((_, i) => i !== index));
//   } else if (type === "new") {
//     setFormData((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//     setImagePreview((prev) => prev.filter((_, i) => i !== index));
//   }
// };


//   const resetForm = () => {
//     // setFormData({ Title: '', images: [], imagesToDelete: [] });
//     setFormData({ Title: '',
//       images: [],
//   imagesToDelete: [],
//   imagesToKeep: [] // Initialize imagesToKeep to an empty array  
//     });
//     setImagePreview([]);
//     setIsEditing(false);
//   };


//   const handleAddPackage = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('Title', formData.Title);

  
//   // Append images to form data
//   formData.images.forEach((image) => {
//     if (image) data.append('images', image);
//   });

// //    // Append images that are to be deleted
// //    formData.imagesToDelete.forEach((image) => {
// //     if (image) data.append('imagesToDelete', image);
// //   });
// //  // Append images that are kept
// //  formData.imagesToKeep.forEach((image) => {
// //   if (image) data.append('imagesToKeep', image);
// // });

//   // Append images that are to be deleted
//   formData.imagesToDelete?.forEach((image) => {
//     if (image) data.append('imagesToDelete', image);
//   });

//   // Append only kept images (not deleted ones)
//   formData.imagesToKeep
//     ?.filter((image) => !formData.imagesToDelete.includes(image)) // exclude deleted images
//     .forEach((image) => {
//       data.append('imagesToKeep', image);
//     });

//     try {
//       if (isEditing) {
//         const galleryId = gallery[editIndex]._id;
//         const response = await axios.put(
//           `${process.env.url}/api/gallery/update-gallery/${galleryId}`, 
//           data, 
//           { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
//         );
//         setGallery(gallery.map((gal) => (gal._id === galleryId ? response.data.updatedGallery : gal)));
//         resetForm();
//         fileInputRef.current.value = null;

//       } else {
//         const response = await axios.post(
//           `${process.env.url}/api/gallery/add-gallery`, 
//           data, 
//           { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
//         );
//         setGallery([...gallery, response.data.gallery]);
//         resetForm();
//         fileInputRef.current.value = null;

//       }
//     } catch (error) {
//       console.error('Error adding gallery entry:', error);
//     }
//   };

  
  

//   const handleDeleteGallery = async(GalleryId)=>{
//     const isConfirmed = window.confirm('Are you sure you want to delete this gallery images ? ');
//     if(isConfirmed){
//   try {
//     const response = await axios.delete(`${process.env.url}/api/gallery/delete-gallery/${GalleryId}`,{  withCredentials: true });
//     console.log("Deleted the Gallery Images",response);
//     setGallery((prevGallery) => prevGallery.filter((gal) => gal._id !== GalleryId));
//   } catch (error) {
//     console.error("Error deleting Gallery:", error.message);
//   }
//     }
//   }

//   // const handleFileChange = (e) => {
//   //   const files = Array.from(e.target.files);
//   //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     images: [...(prev.images || []), ...files],
//   //   }));
//   //   setImagePreview((prev) => [...prev, ...newPreviews]);
//   // };

//   // const handleFileChange = (e) => {
//   //   const files = Array.from(e.target.files);
//   //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  
//   //   // Add files to formData.images and update imagePreview
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     // images: [...(prev.images || []), ...files],
//   //     images: [...files]
//   //   }));
//   //   // setImagePreview((prev) => [...prev, ...newPreviews]);
//   //   setImagePreview(newPreviews); // Replace imagePreview with only new previews
//   // };

// const handleFileChange = (e) => {
//   const files = Array.from(e.target.files);
//   const newPreviews = files.map((file) => URL.createObjectURL(file));
  
//   // Update formData.images and imagePreview
//   setFormData((prev) => ({
//     ...prev,
//     // images: [...files]
//      images: files,
//   }));
//   setImagePreview(newPreviews); // Show only new previews
//   // setPrevDispl(true)
// };

//   const handlePopup = ()=>{
//     setIsEditing(false);
//         // Reset form and state
//         setFormData({
         
//          Title:""
//         });
//         setImagePreview('')
//         fileInputRef.current.value = null;
//   }

//   const columns = [
//     {
//       name: 'Gallery  Title',
//       selector: row => row.Title,
//     },
//     {
//       name: 'Actions',
  
//      cell:(row,index )=>(
//       <FaRegEye size={24} className='cursor' onClick={()=>{openModal(index)}} />
//      )

//     },
//     {
//       name: 'Actions',
//       cell: (row, index) => (
//         <>
//           <MdModeEditOutline size={24} className='cursor'  onClick={() => handleEditGallery(index)}/>
//           <MdDelete size={24} className='cursor' onClick={()=>handleDeleteGallery(row._id)}/>
//         </>
//       ),
//     },
//   ];

//   return (
//     <>
//       <section className='container-fluid'>
//         <div className='row mt-5'>
//           <div className='col-12 col-lg-4'>
//             <form onSubmit={handleAddPackage} className='form'>
//               <div className="col">
//                 <input type="text" name="Title" required value={formData.Title} onChange={handleChange} className="form-control" placeholder="Gallery Title" />
//               </div>
//               <div className="col mt-3">
//                 <input type="file"
//                   multiple onChange={handleFileChange} className="form-control" ref={fileInputRef} />
//               </div>
//               {/* <div className="image-preview mt-3">
//   {formData.imagesToKeep.length > 0 ? (
//     formData.imagesToKeep.map((image, index) => (
//       <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '5px' }}>
//         <img src={image} width={50} height={50} alt="" loading="lazy" style={{ borderRadius: '5px' }} />
//         <MdDelete size={16} style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => handleDeleteImagePreview(index)} />
//       </div>
//     ))
//   ) : (
//     <p>No images to preview</p> // Handle the case when no images are selected
//   )}
//              </div> */}

// <div className="image-preview mt-3">
//   {/* Display images from both imagesToKeep and newly added images */}
//   {formData.imagesToKeep && formData.imagesToKeep.length > 0 && (
//     formData.imagesToKeep.map((image, index) => (
//       <div key={`keep-${index}`} style={{ position: 'relative', display: 'inline-block', marginRight: '5px' }}>
//         <img src={image} width={50} height={50} alt="" loading="lazy" style={{ borderRadius: '5px' }} />
//         <MdDelete size={16} style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => handleDeleteImagePreview(index, "keep")} />
//       </div>
//     ))
//   )}
  
//   {prevDispl && imagePreview && imagePreview.length > 0 && (
//     imagePreview.map((preview, index) => (
//       <div key={`new-${index}`} style={{ position: 'relative', display: 'inline-block', marginRight: '5px' }}>
//         <img src={preview} width={50} height={50} alt="" loading="lazy" style={{ borderRadius: '5px' }} />
//         <MdDelete size={16} style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => handleDeleteImagePreview(index, "new")} />
//       </div>
//     ))
//   )}
// </div>

//               <div className='mt-3'>
//                 <button type="submit" className='btn-add cw fs-16 fw6'>{isEditing ? "Update Images" : "Add Images"}</button>
//                 {isEditing &&    <button type="submit" onClick={handlePopup} className='btn-add cw fs-16 fw6 mt-3'>Cancel</button> }
//               </div>
//             </form>
//           </div>
//          {/* <div className='col-12 col-lg-8'>
//           <h5>{gallery.Title}</h5>
//          {
//             gallery.map((items,index)=>{
//               return(
//          <div className='' key={index}>
   
//                 <Image src={items.Images} width={50} height={50} alt='image'/>
           
//          </div>
//             )
//           })
//         } */}
//         {/* {gallery.map((items,index)=>{
//           return(
//             <div className=''key={index}>
//             <h5 className='fs-24 '>{items.Title}</h5><div className=''>
//               <div className='df fjse' >
//                 {items.Images.map((img)=>(
//               <Image src={img} width={50} height={50} alt='Images'/>
//             ))}
//               </div>
//             </div>
//             </div>
//         )
//       })} 
//           </div>*/}
           
//           <div className='col-12 col-lg-8'>
//             <div className='table'>
//               <DataTable
//                 columns={columns}
//                 data={gallery}
//                 pagination
//                 responsive
//                 highlightOnHover
//                 noHeader
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {isModalOpen && selectedIndex !== null && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" >
//             <div onClick={closeModal}  className="df fjfe cursor">
//             <IoIosCloseCircleOutline size={24} color='#000' />
//             </div>
//             <h5>{gallery[selectedIndex].Title}</h5>
//             <div className="df fjse fw gap16 mt32">
//               {gallery[selectedIndex].Images.map((image, idx) => (
//                 <Image className='mt-3 br10' key={idx} src={image} width={100} height={100} alt='' loading='lazy' />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`

//        .form {
//           border: 1px solid #e0e0e0;
//           padding: 1.5rem;
//           border-radius: 8px;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         }
        
//         .btn-add {
//           background-color: #28a745;
//           color: white;
//           border: none;
//           padding: 12px;
//           width: 100%;
//           border-radius: 6px;
//           font-size: 16px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
        
//         .btn-add:hover {
//           background-color: #218838;
//         }
//         .table{
//           border: 1px solid #e0e0e0;
//           padding: 20px;
//         }
//             .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .modal-content {
//          border: 1px solid;
//           background: white;
//           padding: 20px;
//           border-radius: 8px;
//           width: 500px;
//           height: 450px;
//           overflow-X: auto;
//           text-align: center;
//         }
//           @media only screen and(max-width: 520px){
//               .modal-content {
//           background: white;
//           padding: 20px;
//           border-radius: 8px;
//           width: 100%;
//           height: 400px;
//           overflow-X: auto;
//           text-align: center;
//         }

//           }

//       `}</style>
//     </>
//   );
// }



import moment from 'moment';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { MdDelete, MdModeEditOutline, } from "react-icons/md";
// import DataTable from 'react-data-table-component';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FaRegEye } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Gallery from '@/component/gallery/light-house';

export default function AddGallery() {
  const [imagePreview, setImagePreview] = useState([]);
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // State for selected gallery index
  const [gallery, setGallery] = useState([]);
  const [renderTrigger, setRenderTrigger] = useState(false);
  const [prevDispl, setPrevDispl] = useState(false);
  const [formData, setFormData] = useState({
    Title: '',
    images: [],
    imagesToDelete: [],
    imagesToKeep:[],
    
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.url}/api/gallery/get-gallery`);
        setGallery(response.data);
        console.log("Gallery data fetched:", response.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error.message);
        if (error.response) {
          // If the error has a response, it means the server responded with an error status code
          console.error("Server responded with:", error.response.status, error.response.data);
        } else if (error.request) {
          // If the error has a request but no response, it means the request was made but no response received
          console.error("No response received from server");
        } else {
          // Otherwise, an unknown error occurred
          console.error("Unexpected error:", error.message);
        }
      }
    };
  fetchData();
},[])

const openModal = (index)=>{
  setIsModalOpen(true);
  setSelectedIndex(index)
}
const closeModal = () => {
  setIsModalOpen(false);
  setSelectedIndex(null);
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handleEditGallery = (index) => {
  //   console.log("indexedit",index)
  //   console.log("gallery",gallery)
  //   const galleryItem = gallery[index];
  //   setFormData({
  //     Title: galleryItem.Title,
  //     imagesToKeep: galleryItem.Images, // Keep existing images
  //     imagesToDelete: [], // Initialize empty for images to delete
  //     images: [] // Initialize empty for new images
  //   });
  //   console.log("fm",formData)
  //   setImagePreview(galleryItem.Images); // Add existing images to preview
  //   setIsEditing(true);
  //   setEditIndex(index);
  //   console.log("Prev Imgs",galleryItem.Images) 
  // };
//   const handleDeleteImagePreview = (index) => {
//     const deletedImage = formData.imagesToKeep[index];
    
//     setFormData((prev) => {
//       const updatedImagesToKeep = prev.imagesToKeep.filter((_, i) => i !== index);
//       const updatedImagesToDelete = [...prev.imagesToDelete, deletedImage];
//       return {
//         ...prev,
//         imagesToKeep: updatedImagesToKeep,
//         imagesToDelete: updatedImagesToDelete,
//       };
//     });
//     console.log("imagesToKeep:", formData.imagesToKeep);
// console.log("imagesToDelete:", formData.imagesToDelete);
// setImagePreview((prev) => prev.filter((_, i) => i !== index)); // Remove image from preview as well
// };
  

const handleEditGallery = (index) => {
  const galleryItem = gallery[index];
  setFormData({
    Title: galleryItem.Title,
    imagesToKeep: galleryItem.Images, // Existing images to keep
    imagesToDelete: [], // Initialize empty for images to delete
    images: [] // Initialize empty for new images
  });

  // Reset and set preview with only imagesToKeep
  setImagePreview([]); // Clear previous previews
  setImagePreview(galleryItem.Images); // Show only imagesToKeep in preview
  setIsEditing(true);
  setEditIndex(index);
};

// const handleDeleteImagePreview = (index) => {
//   // Ensure imagesToKeep is defined before filtering
//   if (!formData.imagesToKeep) {
//     return;
//   }

//   const deletedImage = formData.imagesToKeep[index];
//   setFormData((prev) => {
//     const updatedImagesToKeep = prev.imagesToKeep.filter((_, i) => i !== index);
//     const updatedImagesToDelete = [...prev.imagesToDelete, deletedImage];

//     return {
//       ...prev,
//       imagesToKeep: updatedImagesToKeep,
//       imagesToDelete: updatedImagesToDelete,
//     };
//   });

//   // Update the image preview separately
//   setImagePreview((prev) => prev.filter((_, i) => i !== index));
//   setRenderTrigger((prev) => !prev); // Trigger re-render
// };


const handleDeleteImagePreview = (index) => {
  const isKeptImage = index < formData.imagesToKeep.length;
  if (isKeptImage) {
    const deletedImage = formData.imagesToKeep[index];
    setFormData((prev) => ({
      ...prev,
      imagesToKeep: prev.imagesToKeep.filter((_, i) => i !== index),
      imagesToDelete: [...prev.imagesToDelete, deletedImage]
    }));
  } else {
    const newImageIndex = index - formData.imagesToKeep.length;
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== newImageIndex),
    }));
  }
  setImagePreview((prev) => prev.filter((_, i) => i !== index));
};
const handleFileChange = (e) => {
  const files = Array.from(e.target.files);
  const newPreviews = files.map((file) => URL.createObjectURL(file));

  setFormData((prev) => ({
    ...prev,
    images: [...prev.images, ...files],
  }));
  
  setImagePreview((prev) => [...prev, ...newPreviews]);
};



  const resetForm = () => {
    // setFormData({ Title: '', images: [], imagesToDelete: [] });
    setFormData({ Title: '',
      images: [],
  imagesToDelete: [],
  imagesToKeep: [] // Initialize imagesToKeep to an empty array  
    });
    setImagePreview([]);
    setIsEditing(false);
  };


  const handleAddPackage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('Title', formData.Title);

  
  // Append images to form data
  formData.images.forEach((image) => {
    if (image) data.append('images', image);
  });

//    // Append images that are to be deleted
//    formData.imagesToDelete.forEach((image) => {
//     if (image) data.append('imagesToDelete', image);
//   });
//  // Append images that are kept
//  formData.imagesToKeep.forEach((image) => {
//   if (image) data.append('imagesToKeep', image);
// });

  // Append images that are to be deleted
  formData.imagesToDelete?.forEach((image) => {
    if (image) data.append('imagesToDelete', image);
  });

  // Append only kept images (not deleted ones)
  formData.imagesToKeep
    ?.filter((image) => !formData.imagesToDelete.includes(image)) // exclude deleted images
    .forEach((image) => {
      data.append('imagesToKeep', image);
    });

    try {
      if (isEditing) {
        const galleryId = gallery[editIndex]._id;
        const response = await axios.put(
          `${process.env.url}/api/gallery/update-gallery/${galleryId}`, 
          data, 
          { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        );
        setGallery(gallery.map((gal) => (gal._id === galleryId ? response.data.updatedGallery : gal)));
        resetForm();
        fileInputRef.current.value = null;

      } else {
        const response = await axios.post(
          `${process.env.url}/api/gallery/add-gallery`, 
          data, 
          { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
        );
        setGallery([...gallery, response.data.gallery]);
        resetForm();
        fileInputRef.current.value = null;

      }
    } catch (error) {
      console.error('Error adding gallery entry:', error);
    }
  };

  
  

  const handleDeleteGallery = async(GalleryId)=>{
    const isConfirmed = window.confirm('Are you sure you want to delete this gallery images ? ');
    if(isConfirmed){
  try {
    const response = await axios.delete(`${process.env.url}/api/gallery/delete-gallery/${GalleryId}`,{  withCredentials: true });
    console.log("Deleted the Gallery Images",response);
    setGallery((prevGallery) => prevGallery.filter((gal) => gal._id !== GalleryId));
    resetForm ();
  } catch (error) {
    console.error("Error deleting Gallery:", error.message);
  }
    }
  }

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  
  //   setFormData((prev) => ({
  //     ...prev,
  //     images: [...(prev.images || []), ...files],
  //   }));
  //   setImagePreview((prev) => [...prev, ...newPreviews]);
  // };

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  
  //   // Add files to formData.images and update imagePreview
  //   setFormData((prev) => ({
  //     ...prev,
  //     // images: [...(prev.images || []), ...files],
  //     images: [...files]
  //   }));
  //   // setImagePreview((prev) => [...prev, ...newPreviews]);
  //   setImagePreview(newPreviews); // Replace imagePreview with only new previews
  // };

// const handleFileChange = (e) => {
//   const files = Array.from(e.target.files);
//   const newPreviews = files.map((file) => URL.createObjectURL(file));
  
//   // Update formData.images and imagePreview
//   setFormData((prev) => ({
//     ...prev,
//     // images: [...files]
//      images: files,
//   }));
//   setImagePreview(newPreviews); // Show only new previews
//   setPrevDispl(true)
// };

// const handleFileChange = (e) => {
//   const files = Array.from(e.target.files);
//   const newPreviews = files.map((file) => URL.createObjectURL(file));

//   // Merge new images with imagesToKeep and update imagePreview
//   setFormData((prev) => ({
//     ...prev,
//     images: [...(prev.imagesToKeep || []), ...files], // merge existing and new images
//   }));
  
//   // Update preview to include both imagesToKeep and newPreviews
//   setImagePreview([...(formData.imagesToKeep || []), ...newPreviews]);
// };

  const handlePopup = ()=>{
    setIsEditing(false);
        // Reset form and state
        setFormData({
         
         Title:""
        });
        setImagePreview('')
        fileInputRef.current.value = null;
  }

  const columns = [
    {
      name: 'Gallery  Title',
      selector: row => row.Title,
    },
    {
      name: 'Actions',
  
     cell:(row,index )=>(
      <FaRegEye size={24} className='cursor' onClick={()=>{openModal(index)}} />
     )

    },
    {
      name: 'Actions',
      cell: (row, index) => (
        <>
          <MdModeEditOutline size={24} className='cursor'  onClick={() => handleEditGallery(index)}/>
          <MdDelete size={24} className='cursor' onClick={()=>handleDeleteGallery(row._id)}/>
        </>
      ),
    },
  ];

  return (
    <>
      <section className='container-fluid'>
        <div className='row mt-5'>
          <div className='col-12 col-lg-4'>
            <form onSubmit={handleAddPackage} className='form'>
              <div className="col">
                <input type="text" name="Title" required value={formData.Title} onChange={handleChange} className="form-control" placeholder="Gallery Title" />
              </div>
              <div className="col mt-3">
                <input type="file"
                  multiple onChange={handleFileChange} className="form-control" ref={fileInputRef} />
              </div>
              {/* <div className="image-preview mt-3">
  {formData.imagesToKeep.length > 0 ? (
    formData.imagesToKeep.map((image, index) => (
      <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '5px' }}>
        <img src={image} width={50} height={50} alt="" loading="lazy" style={{ borderRadius: '5px' }} />
        <MdDelete size={16} style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => handleDeleteImagePreview(index)} />
      </div>
    ))
  ) : (
    <p>No images to preview</p> // Handle the case when no images are selected
  )}
             </div> */}

{/* <div className="image-preview mt-3">
  {formData.imagesToKeep && formData.imagesToKeep.length > 0 && (
    formData.imagesToKeep.map((image, index) => (
      <div key={`keep-${index}`} style={{ position: 'relative', display: 'inline-block', marginRight: '5px' }}>
        <img src={image} width={50} height={50} alt="" loading="lazy" style={{ borderRadius: '5px' }} />
        <MdDelete size={16} style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => handleDeleteImagePreview(index, "keep")} />
      </div>
    ))
  )}
  
  {prevDispl && imagePreview && imagePreview.length > 0 && (
    imagePreview.map((preview, index) => (
      <div key={`new-${index}`} style={{ position: 'relative', display: 'inline-block', marginRight: '5px' }}>
        <img src={preview} width={50} height={50} alt="" loading="lazy" style={{ borderRadius: '5px' }} />
        <MdDelete size={16} style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => handleDeleteImagePreview(index, "new")} />
      </div>
    ))
  )}
</div> */}

<div className="image-preview mt-3">
  {imagePreview && imagePreview.length > 0 && (
    imagePreview.map((preview, index) => (
      <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '5px' }}>
        <img src={preview} width={50} height={50} alt="" loading="lazy" style={{ borderRadius: '5px' }} />
        <MdDelete size={16} style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => handleDeleteImagePreview(index)} />
      </div>
    ))
  )}
</div>

              <div className='mt-3'>
                <button type="submit" className='btn-add cw fs-16 fw6'>{isEditing ? "Update Images" : "Add Images"}</button>
                {isEditing &&    <button type="submit" onClick={handlePopup} className='btn-add cw fs-16 fw6 mt-3'>Cancel</button> }
              </div>
            </form>
          </div>
         {/* <div className='col-12 col-lg-8'>
          <h5>{gallery.Title}</h5>
         {
            gallery.map((items,index)=>{
              return(
         <div className='' key={index}>
   
                <Image src={items.Images} width={50} height={50} alt='image'/>
           
         </div>
            )
          })
        } */}
        {/* {gallery.map((items,index)=>{
          return(
            <div className=''key={index}>
            <h5 className='fs-24 '>{items.Title}</h5><div className=''>
              <div className='df fjse' >
                {items.Images.map((img)=>(
              <Image src={img} width={50} height={50} alt='Images'/>
            ))}
              </div>
            </div>
            </div>
        )
      })} 
          </div>*/}
           
          <div className='col-12 col-lg-8'>
            <div className='table'>
              <DataTable
                columns={columns}
                data={gallery}
                pagination
                responsive
                highlightOnHover
                noHeader
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" >
            <div onClick={closeModal}  className="df fjfe cursor">
            <IoIosCloseCircleOutline size={24} color='#000' />
            </div>
            <h5>{gallery[selectedIndex].Title}</h5>
            <div className="df fjse fw gap16 mt32">
              {gallery[selectedIndex].Images.map((image, idx) => (
                <Image className='mt-3 br10' key={idx} src={image} width={100} height={100} alt='' loading='lazy' />
              ))}
            </div>
          </div>
        </div>
      )}

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
            .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
         border: 1px solid;
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 500px;
          height: 450px;
          overflow-X: auto;
          text-align: center;
        }
          @media only screen and(max-width: 520px){
              .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 100%;
          height: 400px;
          overflow-X: auto;
          text-align: center;
        }

          }

      `}</style>
    </>
  );
}
