import React from "react";
import ABTinnovative from '../AboutS3/innovative 1.png'
import ABTarrow from '../AboutS3/Arrow.png'
import ABTprice from '../AboutS3/Price.png'
import ABTtime from '../AboutS3/Time.png'
import ABTstandard from '../AboutS3/Standard.png'
import ABTstar from '../AboutS3/Star.png'
import Image from "next/image";



const features = [
  { icon: ABTinnovative , label: "Innovative Design" },
  { icon: ABTarrow, label: "Perfect Planning" },
  { icon: ABTprice, label: "Reasonable Price" },
  { icon: ABTtime, label: "Timely Completion" },
  { icon: ABTstandard, label: "Standard Quality" },
  { icon: ABTstar, label: "Customer Satisfaction" },
];

const AboutS3 = () => (
  <div className="aboutS3-container">
    <div className="aboutS3-features-row">
      {features.map((feat, idx) => (
        <div className="aboutS3-card" key={idx}>
          <Image src={feat.icon} alt={feat.label} className="aboutS3-icon" />
          <div className="aboutS3-label">{feat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutS3;
