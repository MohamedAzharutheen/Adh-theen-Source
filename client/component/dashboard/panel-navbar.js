import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import SidebarMenu from '../header-section/mobile-nav';
import axios from 'axios';
import { useRouter } from 'next/router';
import withAuth from './PrivateRoutes/ProtectRoutes';
const PannelNavbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const Menu = [
    { color: "#D0AB17", path: "/admin", icon: <IoHome size={24} />, name: "Dashboard" },
    { color: "#D0AB17", path: "/admin/banner", icon: <IoHome size={24} />, name: "Banner" },
    { color: "#D0AB17", path: "/admin/packages-details", icon: <BiSolidOffer size={24} />, name: "Packages" },
    { color: "#D0AB17", path: "/admin/gallery-details", icon: <MdOutlineFlightTakeoff size={24} />, name: "Gallery" },
    { color: "#D0AB17", path: "/", icon: <FaHeadphonesAlt size={24} />, name: "Go to website" },
  ];
  const router = useRouter();


const handleLogout = async ()=>{

try {
  const response = await axios.post(`${process.env.url}/api/user/logout`, {}, { withCredentials: true });
  if(response.data.message === 'Logged out successfully');{
  router.push('/admin/login')
  }
} catch (error) {
  console.error('Logout failed:', error);
}

}

  return (
    <>
     <div className='container-fluid'>
     <div className=''>
                <div className='df  fdc gap5 fafe cursor'>
                 <div className=''> 
                  <FaPowerOff onClick={handleDropdown} size={14} className='cb fwb'/>
                  </div>
                  {isDropdownOpen && (
                  <div className='sub-menu mt20'>
                 <Link href={"/admin/change-password"} >
                   <h6 className={`fs-12 fwb pdtbl10 green-clr df fdc fjfe`}>Chnage Password</h6>
                   </Link>
                    <h6 onClick={handleLogout} className={`fs-12 fwb pdtbl10 green-clr df fdc fjfe`}>Logout</h6>
                    </div>
                )}
                </div>

              </div>
     </div>
      <section className='header mt32'>
        <div className='container-fluid'>
          <div className='df fac  fjse fjc mdn'>
          <div className=''>
              <Image className='logo-scale' src={"/assets/images/logos/logo.svg"} width={80} height={80} alt='Logo' loading='lazy' quality={100} />
            </div>
            <Link className='' href={"/admin"}><p className='fs-16 fwb'>Dashboard</p></Link>
          <Link className='' href={"/admin/banner/"}><p className='fs-16 fwb'>Banner</p></Link>
          <Link href={"/admin/package-details/"}><p className='fs-16 fwb'>Packages</p></Link>
            <Link href={"/admin/gallery-details/"}><p className='fs-16 fwb'>Gallery</p></Link>
            <Link href={"/"}><button className='fs-16 fwb btn-cnt cw'>Go Website</button></Link>
          </div>

          <div className='mdf fjsb fac dn mdb'>
            <div className=''>
              <Image src={"/assets/images/logos/logo.svg"} width={60} height={60} alt='Logo' loading='lazy' quality={100} />
            </div>

            {/* Burger icon for mobile */}
            <div className="burger-menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      </section>


    {isMenuOpen &&
       <SidebarMenu Menu={Menu} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
}
       
      <style jsx>{`
      
      .sub-menu{
        z-index: 9999;
        aidth: auto;
        height: auto;
        position: absolute;
        top:20px;
      }
        .header {
          background: linear-gradient(90deg, #e9c751 0%, #ffffff 100%);
          border-bottom: 1px solid #ffffff;
          width: 100%;
          // position: sticky;
          // top: 40px;
          // z-index: 200000;
        }
             p {
              position: relative;
            }

            p::before {
              content: '';
              position: absolute;
              bottom: -8px;
              left: 0;
              width: 0;
              height: 3px;
              background-color: #006c35;
              transition: all 0.5s;
            }

            p:hover::before {
              width: 100%;
            }

            .active::before {
              width: 100%;
            }
            .active{
            color: #006c35;
            }

            p:hover {
              color: #006c35;
              transition: 0.3s;
            }
            .active::before {
              width: 100%;
            }

        .btn-cnt{
        background: #006C35;
        padding: 10px 20px;
        border-radius: 8px;
        transition: all 0.3s 
        }
        @media only screen and (max-width: 1023px) {
                .header {
          background: linear-gradient(90deg, #e9c751 0%, #ffffff 100%);
          border-bottom: 1px solid #ffffff;
          width: 100%;
          padding: 5px;
        }
          .burger-menu {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        width: 40px;
            height: 33px;
        z-index: 100;
        border: 1px solid #D0AB17;
        padding: 5px;
        border-radius: 5px;
          }

          .burger-menu span {
            height: 3px;
            width: 100%;
            background: #D0AB17;
            border-radius: 10px;
          }

          .side-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 270px;
            height: 100%;
            background: #ffffff;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            padding: 20px;
          }
        }

      `}</style>
    </>
  );
}

export default withAuth(PannelNavbar);
