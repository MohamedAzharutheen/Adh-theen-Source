import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa";
import SidebarMenu from './mobile-nav';
import { IoHome } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const Menu = [
    { color: "#D0AB17", path: "/", icon: <IoHome size={24} />, name: "Home" },
    { color: "#D0AB17", path: "/package", icon: <BiSolidOffer size={24} />, name: "Packages" },
    { color: "#D0AB17", path: "/service", icon: <MdOutlineFlightTakeoff size={24} />, name: "Services" },
    { color: "#D0AB17", path: "/", icon: <FaUserLarge size={24} />, name: "Guidance" },
    { color: "#D0AB17", path: "/contact", icon: <FaHeadphonesAlt size={24} />, name: "Contact Us" },
  ];
  return (
    <>
      <section className='header'>
        <div className='container-fluid'>
          <div className='df fac fjse fjc mdn'>
          <Link className='' href={"/"}><p className='fs-16 fwb'>Home</p></Link>
          <Link href={"/package"}><p className='fs-16 fwb'>Packages</p></Link>
            <Link href={"/gallery"}><p className='fs-16 fwb'>Gallery</p></Link>

            <div className=''>
              <Image className='logo-scale' src={"/assets/images/logos/logo.svg"} width={80} height={80} alt='Logo' loading='lazy' quality={100} />
            </div>
            <Link href={"/service"}><p className='fs-16 fwb'>Services</p></Link>
            <div className='pos-r'>
                <div className='df fac gap5'>
                  <p onClick={handleDropdown} className={`fs-16 fwb cursor`}>Guidance</p>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}>
                    <FaChevronDown size={16} color='#000' />
                  </motion.div>
                </div>
                {isDropdownOpen && (
                  <motion.div className='drop-down cursor'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                 <Link href={"/guidance/hajj-guide"} >
                   <h6 className={`fs-16 fwb pdtbl10 green-clr`}>Hajj Guide</h6>
                   </Link>
                   <Link href={"/guidance/umrah-guide"} >
                    <h6 className={`fs-16 fwb pdtbl10 green-clr`}>Umrah Guide</h6>
                    </Link>
                    </motion.div>
                )}
              </div>
            <Link href={"/contact"}><button className='fs-16 fwb btn-cnt cw'>Contact Us</button></Link>
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
