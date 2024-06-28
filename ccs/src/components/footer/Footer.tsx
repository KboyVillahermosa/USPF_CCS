import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./Footer.css"

const Footer:React.FC = () => {
  return (
    <>
    <main className="dark:bg-gray-900 bg-blue-50">
     <div className="footer-header">
        <div className="footer-content">
        <FaFacebookSquare className='facebook'/>
        </div>
        <div className="footer-content">
        <AiFillTikTok className='tiktok' />
        </div>
        <div className="footer-content">
        <FaInstagramSquare  className='instagram'/>
        </div>
     </div>
     </main>
    </>
  )
}

export default Footer;