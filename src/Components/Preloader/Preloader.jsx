import React from 'react';
import './Preloader.css';
import logo from '../Asset/fisheye_BW_logo.png';  // import your logo image

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="Loading..." className="preloader-logo" />
    </div>
  );
};

export default Preloader;
