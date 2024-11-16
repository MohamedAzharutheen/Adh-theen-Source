import axios from 'axios';
import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const   EnquiryForm = ({close}) => {
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [closeForm, setCloseForm] = useState(true);

  const handleInputChange = (field, value) => {

    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const { name, phone, service } = formData;

    // Validate the form fields
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!phone.trim()) {
      validationErrors.phone = 'Mobile Number is required';
    }
    if (!service.trim()) {
      validationErrors.service = 'Please Select Your Package';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true)
 try {
  const response = await axios.post(`${process.env.url}/api/user/enquiry`,formData)
          // Reset form data after submission
 setFormData({
            name: '',
            phone: '',
            email: '',
            packages: '',
            message: '',
    });
  setErrors({});
  console.log("Data Added Successfully",response.data);
  
  toast.success('Your form has been submitted successfully!');

  setTimeout(() => {
    setCloseForm(false);
  }, 6000);

 } catch (error) {
  console.error('Error Response:', error.response ? error.response.data : error.message);
  alert('Form Submission Is Failed,Please Call This Number 950077 1134 .');
 }
finally{
  setLoading(false)
}
  };

  if (!closeForm) {
    return null; // Hide the form if closeForm is false
  }

  return (
    <>
      <section className='df fjc fac'>
        <div className='form-center '>
          <div className={`form-box`}>
            <div className='form-rad-box'>
              <h6 className={`fs-19 mfs-14 cw `}>Begin Your Spiritual Journey: Hajj Registration Open</h6>
              <div className="icon-pos cursor" onClick={close} >
             <IoCloseSharp className="fwb" size={24} color='#000'/>
             </div>
            </div>
            <div className='df fdc fac mt24 mmt0'>
              <input
                className={`inp-box mt12`}
                type='text'
                placeholder='Name'
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              {errors.name && <span className="red-clr fs-12 ">{errors.name}</span>}
              <input
                className={`inp-box mt12`}
                type='tel'
                placeholder='Mobile No'
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
              {errors.phone && <span className="red-clr fs-12 mfs-10 pdt10 mpdt5">{errors.phone}</span>}

              <input
                className={`inp-box mt12`}
                type='email'
                placeholder='Email'
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />

              <select
                className={`opt-box mt12`}
                value={formData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
              >
                <option className={`opt-value`} value={`opt-value`} >Packages Type</option>
                <option value="Semi Delux" className={`opt-value`}>Semi Delux</option>
                <option value="Economy" className={`opt-value`}>Economy</option>
              </select>
              {errors.service && <span className="red-clr fs-12 ">{errors.service}</span>}
              <input
                className={`inp-box mt12`}
                type='text'
                placeholder='Message'
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
              <div className={`mt20`}>
                <button className={`sub-btn fs-16 cw`} onClick={handleSubmit}> 
                {loading ? (<div className="spinner-container">
            <div className="spinner"></div>
          </div>):'Submit'}  
                 </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`


/* Spinner container */
.spinner-container {
  display: flex; /* Center spinner */
  align-items: center; /* Vertically center spinner */
  justify-content: center;
}

/* Spinner styles */
.spinner {
  border: 8px solid rgba(0, 0, 0, 0);
  border-left-color: #ffffff; /* Spinner color */
  border-radius: 50%;
  width: 20px; /* Spinner size */
  height: 20px; /* Spinner size */
  animation: spin 1s linear infinite;
}

/* Spinner animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
          .success-message {
            color: #FFA900;
          }
                    .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -19px;
        left: 76%;
        }
          .form-center {
            width: 500px;
            height: 280px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 27%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .form-box {
            width: 400px;
            padding: 0px 0px 20px 0px;
            border-radius: 20px;
            background-color: #FFFFFF;
            box-shadow: 0px 8px 16px 0px #00000040;
          }
          .form-rad-box {
            width: 400px;
            height: 80px;
            border-radius: 20px 20px 0px 0px;
            background-color: #006c35;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .opt-box {
            width: 300px;
            height: 48px;
            border-radius: 8px;
            border: 1px solid #333333;
            color: #333333;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5px;
            padding: 0px 8px 0px 8px;
          }
          .inp-box {
            width: 295px;
            height: 48px;
            border-radius: 8px;
            border: 1px solid #333333;
            color: #333333;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5px;
            padding: 0px 8px 0px 8px;
          }
          .sub-btn {
            width: 101px;
            height: 40px;
            border-radius: 12px;
            background-color: #d0ab17;
            border: none;
            cursor: pointer;
          }
          .opt-value {
            width: 295px;
            height: 96px;
          }
            @media only screen and (max-width: 468px) {
                .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -23% !important;
        left: 74% !important;
        }
            }
          @media only screen and (max-width: 1023px) {
            .form-center {
              z-index: 1000;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
      .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -20%;
        left: 70%;
        }
            .form-box {
              width: 290px;
              height: auto;
              padding: 0px 0px 40px 0px;
              border-radius: 25px;
              gap: 0px;
              background-color: #FFFFFF;
              box-shadow: 0px 8px 16px 0px #00000040;
            }
            .form-rad-box {
              width: 290px;
              height: auto;
              border-radius: 25px 25px 0px 0px;
              background-color: #006c35;
              text-align: center;
              padding-top: 15px;
               padding-bottom: 7px;
            }
            .inp-box {
              width: 170px;
              height: 28px;
              border-radius: 4px;
              border: 1px solid #333333;
              color: #333333;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0.5px;
              padding: 0px 8px 0px 8px;
            }
            .opt-box {
              width: 170px;
              height: 28px;
              border-radius: 4px;
              border: 1px solid #333333;
              color: #333333;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0.5px;
              padding: 0px 8px 0px 8px;
            }
          }
        `}
        </style>
      </section>
      <ToastContainer />
    </>
  );
};

export default EnquiryForm;
