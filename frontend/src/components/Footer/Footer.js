import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img className="logo" src={assets.logo} alt="" />
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>


        <div className="footer-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 9325039416</li>
            <li>dinelink@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="copyright">
        Copyright 2024 @ DineLink.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
