import React from "react";

const Email = () => (
  <div className="contact-bar">
    <div className="contact-left">
      {/* Mail icon (Font Awesome) */}
      <i className="fas fa-envelope"></i>
      <span>
        E-Mail: <a href="mailto:admin@fisheyeinterior.com">admin@fisheyeinterior.com</a> | 
        <a href="mailto:info@fisheyeinterior.com"> info@fisheyeinterior.com</a>
      </span>
    </div>
    <div className="contact-right">
      {/* Phone icon (Font Awesome) */}
      <i className="fas fa-phone-alt"></i>
      <span>
        Mobile: <a href="tel:+919994444121">+91 99944 44121</a> | <a href="tel:+918220767230">+91 82207 67230</a> 
      </span>
    </div>
  </div>
);

export default Email;
