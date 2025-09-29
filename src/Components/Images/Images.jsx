import React from 'react';
import './Images.css';
import imageBed from '../Asset/office.webp'

function Images() {
  return (
    <div className="images-container">
      <div className="images-head">
      <a href="/imageBed" target="_blank" rel="noopener noreferrer">
        <img src={imageBed} alt="Example" className="image-bed" />
        <h4>BEDROOM</h4>
      </a>
      </div>
           <div className="images-head">
      <a href="/imageCeilling" target="_blank" rel="noopener noreferrer">
        <img src={imageBed} alt="Example" className="image-bed" />
        <h4>Ceilling</h4>
      </a>
      </div>
    </div>
  );
}

export default Images;
