import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare  } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <main className="bg-blue-50 dark:bg-gray-900">
        <div className="footer-header">
          <div className="footer-content">
            <FaFacebookSquare className="facebook text-blue-400 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-600" />
          </div>
          <div className="footer-content">
            <AiFillTikTok className="tiktok text-blue-400 hover:text-gray-900 dark:hover:text-gray-200" />
          </div>
          <div className="footer-content">
            <FaInstagramSquare className="instagram text-blue-400 hover:text-red-500 " />
          </div>
          <div className="footer-content">
          <FaGithubSquare  className="instagram text-blue-400 hover:text-gray-900 dark:hover:text-white " />
          </div>
        </div>
        <div className="footer-text">
          <div className="footer-content">
            <h1 className="text-gray-900 dark:text-white">
              Collge of Computer Studies
            </h1>
            <p className="text-gray-900 dark:text-white">
              University of Southern Philippines Foundation
            </p>
          </div>
        </div>
        <div className="logo-header">
          <div className="logo-content">
            <img src="/uspf-logo.png" alt="" />
          </div>
          <div className="logo-content">
            <img src="/ccs.png" alt="" />
          </div>
          <div className="logo-content">
            <img src="/ccsst.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Footer;
