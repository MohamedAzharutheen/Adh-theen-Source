import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const [success,setSuccess]=useState("");
  const [showPassword,setShowPassword]=useState(false )
  const router = useRouter();
const handleSubmit = async (event) => {
    event.preventDefault();
    // Regular expression for a simple email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    // Regular expression for a password with at least 6 characters
    const passwordRegex = /^.{8,}$/;
 
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format. Please enter a valid email.');
      return;
    }
 
    if (!passwordRegex.test(password)) {
      setErrorMessage('Invalid password format. Password must be at least 8 characters.');
      return;
    }
    try {
        const response = await axios.post('http://localhost:5000/api/user/login', { email, password }, { withCredentials: true }); 
        console.log('Login response:', response.data); // Debugging line
        setSuccess("Admin Login Successfull")
        setErrorMessage('');
         setFailedMessage('');
        router.push('/admin')
        } catch (error) {
        
        setFailedMessage("Please Fill The Correct Email And Password")
       console.error('Login error:', error); // Debugging line
      }
    
 

   // Your login logic goes here
 
    // If successful login
    

  };
return (
    <>
        <section className='h100v'>
        <div className='container'>
        <div className='df fjc fjic pdt120'>
        <div className='box'>
         <div className='df fjc'>
            <Image src="/assets/images/logos/logo.svg" alt="opseazy" width={100} height={100} />
          </div>
        <h2 className='tac pdt20 fs20 fwb'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb20'>
            <label htmlFor="email">Email Id</label>
            <input className='bxint' type="email"  id="email"  name="email"  value={email}  onChange={(e) => setEmail(e.target.value)} autoComplete='off'  required/>
         </div>
         
          <div className='mb20 pos-r'>
            <label htmlFor="password">Password</label>
            <input className='bxint'type={showPassword ? 'text' :'password'} id="password"  name="password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
            <div className='pos-a eye'><span className='' onClick={()=>setShowPassword(!showPassword)}> {showPassword ?        <FaEye style={{ fontSize: '24px', color: '#000' }} />: <FaEyeSlash style={{ fontSize: '24px', color: '#000' }} />}  </span></div>
        </div>

        <div><p className='pdb10 green'>{success}</p></div>
        <div><p>{errorMessage}</p></div>
        <div><p className='pdb10 red'>{failedMessage}</p></div>
          <div>
            <button type="submit" className='butt'>Login</button>
          </div>
          
        </form>
      </div>
    </div>
    </div>
    </section>
      <style jsx>
      {`
      .eye{
        right:5px;
        bottom:8px;
        cursor:pointer;
        
      }
      .box{
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      }
      .red{
        color:#FF0000;
      }
      .green{
        color:#008000;
      }
      .bxint{
        width: 100%;
        padding: 8px;
        box-size: border-box; 
        border: 1px solid #ccc;
        border-radius: 4px ;
      }
      .butt{
        background-image: linear-gradient(to right,#CB218E, #6617CB);
        padding:10px;
        border: none;
        color:#fff;
        border-radius: 4px; 
        font-size:16px;
        font-weight:bold;
        cursor: pointer; 
        width: 100%; 
      }
      `}
       </style>
      </>
  );
};
 
export default LoginPage;
