// components/withAuth.js
import { useEffect, useState } from 'react';
import {useRouter } from 'next/router';
import axios from 'axios';

const withAuth = (WrappedComponent) => {

const AuthenticatedComponent = (props)=>{
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

useEffect(()=>{
    const verifySession = async()=>{
        try {
            const response = await axios.get('http://localhost:5000/api/user/check-session',{withCredentials:true});
           console.log("check",response) 
            
            if(response.data.isAuthenticated){
                setIsAuthenticated(true);
            }
            else{
                setIsAuthenticated(false);
                router.push('/admin/login'); // Redirect to login if not authenticated
            }
        } catch (error) {
            setIsAuthenticated(false);
          router.push('/admin/login'); // Redirect to login on error
        }
    };
    verifySession();

},[router]);


  // Show loading indicator while checking authentication status
  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

return isAuthenticated ? <WrappedComponent {...props} /> : null;
}       

return AuthenticatedComponent;

}

export default withAuth;