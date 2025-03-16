import { FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

import React from 'react'

function Footer() {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
               
                <div className="phone"> 
               <h4>
               <FaPhone  size={20} style={{color: "#fff", marginRight: "2rem"}}/>
               +254729803389
               </h4>
                </div>

                <div className="email"> 
               <h4>
               <FaMailBulk  size={20} style={{color: "#fff", marginRight: "2rem"}}/>
               joash@gmail.com
               </h4>
                </div>
            </div>
            <div className="right">
              
              <div className="socials">
              <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
              <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
              <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer