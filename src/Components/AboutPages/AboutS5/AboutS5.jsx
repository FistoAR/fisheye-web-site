import React from "react";

// Replace with your actual image and icons
import team from "./team-image.png";
import iconQuality from "./icon-quality.png";
import iconTime from "./icon-quality.png";
import iconPrice from "./icon-quality.png";
import iconSatisfaction from "./icon-quality.png";
import Image from "next/image";

const values = [
  { icon: iconQuality, label: "Quality", percent: "100%" },
  { icon: iconTime, label: "On-Time", percent: "100%" },
  { icon: iconPrice, label: "Best Price", percent: "100%" },
  { icon: iconSatisfaction, label: "Client-Satisfaction", percent: "100%" }
];

const AboutS5 = () => (
  <div className="aboutS5-container">
    <div className="aboutS5-inner">
      <div className="aboutS5-image-col">
        <Image src={team} alt="Team working on construction model" className="aboutS5-img" />
      </div>
      <div className="aboutS5-content">
        <h2 className="aboutS5-title">The Core<br />Company Values <span className="aboutS5-excl">!</span></h2>
        <p className="aboutS5-sub">
          At Fisheye Interiors, we aim to make every home construction in Coimbatore a smooth and joyful journey by respecting our clients’ time and money, building each space brick-by-brick with passion, detail, and care.

        </p>
        <div className="aboutS5-values-row">
          {values.map((v, i) => (
            <div className="aboutS5-value" key={i}>
              <div className="aboutS5-value-left">
                <Image src={v.icon} alt={v.label} className="aboutS5-value-icon" />
                <span>{v.label}</span>
              </div>
              <div className="aboutS5-value-bar-box">
                <div className="aboutS5-value-bar" />
              </div>
              <span className="aboutS5-value-percent">{v.percent}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="fullscreen-border"></div>
    </div>
  </div>
);

export default AboutS5;
