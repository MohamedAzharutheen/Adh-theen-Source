import React from 'react';
import { FaPlay } from 'react-icons/fa';

export default function VideoBtn() {
  return (
    <div className="video-button-container">
      <div className="video-button">
        <FaPlay size={14} className="play-icon" />
        {/* Add the layers here */}
        <div className="layer first-layer"></div>
        <div className="layer second-layer"></div>
        <div className="layer third-layer"></div>
      </div>

      <style jsx>{`
        // .video-button-container {
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   height: 100vh; /* Full viewport height for centering */
        //   background-color: yellow;
        // }

        .video-button {
          background-color: #fff; /* White background */
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
        }

        .play-icon {
          color: black; /* Black play icon */
          z-index: 1; /* Ensure the play icon is above the layers */
        }

        /* Base styling for all layers */
        .layer {
          position: absolute;
          border-radius: 50%;
          width: 68px;
          height: 68px;
        //   top: -15px;
        //   left: -15px;
          opacity: 0;
          animation: expand 3s infinite ease-in-out;
        }

        /* First layer styling */
       .first-layer {
          background-color: rgba(255, 255, 255, 0.6);
          width: 68px; /* Larger size */
          height: 68px; /* Larger size */
          animation-delay: 0s;
        } 

        /* Second layer styling */
        .second-layer {
          background-color: rgba(255, 255, 255, 0.4);
          width: 78px; /* Medium size */
          height: 78px; /* Medium size */
          animation-delay: 1s;
        }

        /* Third layer styling */
        .third-layer {
          background-color: rgba(255, 255, 255, 0.2);
          width: 100px; /* Smallest size */
          height: 100px; /* Smallest size */
          animation-delay: 2s;
        }

        /* Keyframe animation for expanding and fading */
        @keyframes expand {
          0% {
            transform: scale(0.6);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
          
        @media only screen and (max-width: 768px){
            .video-button {
          background-color: #fff; /* White background */
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
        }

        /* First layer styling */
       .first-layer {
          background-color: rgba(255, 255, 255, 0.6);
          width: 48px; /* Larger size */
          height: 48px; /* Larger size */
          animation-delay: 0s;
        } 
           .layer {
          position: absolute;
          border-radius: 50%;
          width: 48px;
          height: 48px;
        //   top: -15px;
        //   left: -15px;
          opacity: 0;
          animation: expand 3s infinite ease-in-out;
        }
            /* Second layer styling */
        .second-layer {
          background-color: rgba(255, 255, 255, 0.4);
          width: 58px; /* Medium size */
          height: 58px; /* Medium size */
          animation-delay: 1s;
        }

        /* Third layer styling */
        .third-layer {
          background-color: rgba(255, 255, 255, 0.2);
          width: 78px; /* Smallest size */
          height: 78px; /* Smallest size */
          animation-delay: 2s;
        }
        }
      `}</style>
    </div>
  );
}
