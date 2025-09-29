import React from "react";
import { FaHome, FaTools, FaCubes, FaBuilding } from "react-icons/fa";
import ConstAbtimg from '../Asset/HouseHand.webp'
import Image from "next/image";

const ConstAbt = () => {
  return (
    <section className="const-abt">
      <div className="abt-container">
        {/* Left Side - Image */}
        <div className="abt-image" data-aos="fade-up-right">
          <Image
            src={ConstAbtimg} // 👉 replace with your image path
            alt="Hera Construction"
          />
        </div>

        {/* Right Side - Content */}
        <div className="abt-content" data-aos="fade-up-left">
          <h2>About Fish Eye <br /> Construction</h2>
          <p>
            Hera Construction Company is a prominent construction firm with 8
            years of experience in the building industry, serving clients across
            Tamil Nadu. Our dynamic team comprises young and talented minds,
            dedicated to delivering cutting-edge solutions with a focus on
            innovation and aesthetic designs. We take pride in transforming your
            dreams into architectural marvels that stand the test of time. Trust
            Hera Construction for your construction needs, as we redefine
            excellence in the field of building and design throughout Tamil
            Nadu.
          </p>

          {/* Services List */}
          <div className="abt-services">
            <div className="service-item">
              <FaHome className="service-icon" />
              <span>Residential Building</span>
            </div>
            <div className="service-item">
              <FaTools className="service-icon" />
              <span>Rennovation Works</span>
            </div>
            <div className="service-item">
              <FaCubes className="service-icon" />
              <span>3D Designing</span>
            </div>
            <div className="service-item">
              <FaBuilding className="service-icon" />
              <span>Building Commercial Space</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstAbt;
