import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactTop from './ContactTop/ContactTop';

import PhoneLogo from "./contact_logo.png";
import mailLogo from "./Email_logo.png";
import locationLogo from "./Location_logo.png";

const Contact = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, '');
    setPhone(onlyNums);
  };

  return (
    <div>
      <ContactTop />
      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-info-card">
          <div className="contact-info-header">
            <h4 className="form-title1">Contact Info</h4>
          </div>
          <div className="contact-details">
            <div className="contact-row">
              <span className="contact-icon">
                <Image src={PhoneLogo} alt="Phone" width={32} height={32} />
              </span>
              <div className="contact-numbers">
                <div className="contact-t-t">Phone</div>
                <ul className="contact-links">
                  <li>
                    <a href="tel:+919994444121">+91 99944 44121</a> |
                    <a href="tel:+918220767230"> +91 82207 67230</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-icon">
                <Image src={mailLogo} alt="Email" width={32} height={32} />
              </span>
              <div className="contact-numbers1">
                <div className="contact-t-t">Email</div>
                <a className="contact-email" href="mailto:admin@fisheyeinterior.com">
                  admin@fisheyeinterior.com
                </a>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-icon">
                <Image src={locationLogo} alt="Location" width={32} height={32} />
              </span>
              <div className="contact-numbers1">
                <div className="contact-t-t">Address</div>
                10/11, Trichy Road,<br />
                Sundram Brothers Layout, Ramanathapuram,<br />
                Coimbatore - 641 045, Tamil Nadu, India.
              </div>
            </div>
          </div>
          <div className="contact-socials">
            <span>
              <a
                href="https://facebook.com/auraspaces"
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/auraspaces"
                className="social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
            <span>
              <a
                href="https://instagram.com/auraspaces"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span>
              <a
                href="https://linkedin.com/company/auraspaces"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>

        {/* Center Column: Enquiry Form */}
        <div className="contact-form-card">
          <h4 className="form-title">Get Enquiry</h4>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="nameInput">Name</label>
                <input id="nameInput" type="text" placeholder="Enter Name" className="form-input" />
              </div>
              <div className="form-field">
                <label htmlFor="phoneInput">Phone</label>
                <input
                  id="phoneInput"
                  type="text"
                  placeholder="Enter Phone Number"
                  className="form-input"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="emailInput">Email</label>
                <input id="emailInput" type="email" placeholder="Email" className="form-input" />
              </div>
              <div className="form-field">
                <label htmlFor="cityInput">City</label>
                <input id="cityInput" type="text" placeholder="City" className="form-input" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field" style={{ width: "100%" }}>
                <label htmlFor="enquiryTypeSelect">Enquiry Type</label>
                <select id="enquiryTypeSelect" className="form-input">
                  <option>Choose Enquiry Type</option>
                  <option>Interior Design</option>
                  <option>Construction</option>
                </select>
              </div>
            </div>
            <div className="form-field" style={{ width: "100%" }}>
              <label htmlFor="messageTextarea">Message</label>
              <textarea id="messageTextarea" placeholder="Type Here.." className="form-input message-box"></textarea>
            </div>
            <button className="send-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Map */}
        <div className="contact-map-card">
          <iframe
            title="Fisheye design studios"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.018566304859!2d76.98670846549594!3d10.99891559770117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48206a880fab87f1%3A0x5c4fd1fbfe18c5c2!2sFisheye%20Interiors!5e0!3m2!1sen!2sin!4v1756797265864!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
