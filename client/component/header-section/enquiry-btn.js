import React, { useState } from 'react';
import Link from 'next/link';
import { MdMessage } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";

export default function EnquiryBtn() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the visibility of the extra icons
  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <section className='container'>
      <div className="enquiry-section">
        <div className="enquiry-container">
          {/* Main Message Icon */}
          <div className={`main-enquiry-icon ${isOpen ? 'dn-icon' : ''}`} onClick={toggleIcons}>
            <MdMessage size={24} />
          </div>
          {isOpen && (
            <div className="close-enquiry-icon" onClick={toggleIcons}>
              <IoCloseSharp size={24} />
            </div>
          )}

          {/* Additional icons (WhatsApp, Call, Message) */}
         <div className={`extra-enquiry-icons ${isOpen ? 'open' :''}`}>
            <div className="sub-icon" style={{ transitionDelay: '0.1s' }}>
              <Link legacyBehavior href={`mailto:aldeentoursandtravels@gmail.com`} target="_blank" rel="noopener noreferrer">
                <a target="blank">
                  <MdOutlineMail size={24} color="#FFFFFF" />
                </a>
              </Link>
            </div>
            <div className="sub-icon" style={{ transitionDelay: '0.2s' }}>
              <Link href={`tel:+91 88 38 50 41 18`}>
                <LuPhone size={24} color="#FFFFFF" />
              </Link>
            </div>
            <div className="sub-icon" style={{ transitionDelay: '0.3s' }}>
              <Link legacyBehavior href={`https://wa.me/8838504118`} passHref rel="noopener noreferrer">
                <a target="blank">
                  <BsWhatsapp size={24} color="#FFFFFF" />
                </a>
              </Link>
            </div>
          </div>
          
        </div>
        </div>
      </section>

      <style jsx>{`
        .enquiry-section {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999;
        }

        .enquiry-container {
          position: relative;
        }

        .main-enquiry-icon {
          background-color: #006c35;
          color: white;
          padding: 20px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0px 4px 24px 0px #3f3d3a99;
          transition: all 0.3s linear;
        }

        .main-enquiry-icon:hover {
          box-shadow: 0px 0px 6px 9px #fdbb3940;
        }

        .extra-enquiry-icons {
          position: absolute;
          bottom: 70px;
          right: 0;
          display: flex;
          flex-direction: column;
           margin-right: 8px;
          align-items: center;
          gap: 5px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease-in-out;
        }

        .extra-enquiry-icons.open {
          opacity: 1;
          transform: translateY(0);
        }

        .sub-icon {
          background-color: #006c35;
          width: 48px;
          height: 48px;
          border-radius: 100%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s linear;
          opacity: 0;
          transform: translateY(10px);
        }

        .extra-enquiry-icons.open .sub-icon {
          opacity: 1;
          transform: translateY(0);
        }

        .dn-icon {
          display: none;
        }

        .extra-enquiry-icons .sub-icon:hover {
          transform: scale(1.1);
          box-shadow: 0px 4px 24px 0px #ffa90099;
        }

        .close-enquiry-icon {
          background-color: #006c35;
          color: white;
          padding: 20px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s linear;
        }

        .close-enquiry-icon:hover {
          box-shadow: 0px 4px 24px 0px #ffa90099;
        }
          @media only screen and (max-width: 425px){
          .enquiry-section {
          position: fixed;
          bottom: 20px;
          right: 30px;
          z-index: 999;
        }

          }
      `}</style>
    </>
  );
}
