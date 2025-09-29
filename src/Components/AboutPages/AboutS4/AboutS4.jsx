import React from "react";
import logo from "./interior logo_png.png"; // Central logo import
import topImage from "./living-room.png"; // Replace with your image file
import bottomImage from "./office-room.png"; // Replace with your image file

// Example SVG or image placeholders for card icons
import MissionIcon from "./mission.svg";
import ValueIcon from "./value.svg";
import VisionIcon from "./vision.svg";
import CommitmentIcon from "./commitment.svg";


import rborder from './Rborder.png'
import lborder from './lborder.png'
import Image from "next/image";


const cards = [
  {
    title: "OUR MISSION",
    text: "Our Mission is we are a trusted interior design company in Coimbatore offering personalized interiors, residential and office design, and end-to-end interior solutions.",
    icon: MissionIcon,
  },
  {
    title: "OUR VALUE",
    text: "Our value lies in successfully conceptualizing and executing residential and architectural projects with innovative construction and interior design solutions that exceed expectations.",
    icon: ValueIcon
  },
  {
    title: "OUR VISION",
    text: "Our vision is to be the leading interior design company in Coimbatore, renowned for creativity, trusted client relationships, and inspiring residential and office interiors.",
    icon: VisionIcon
  },
  {
    title: "OUR COMMITMENT",
    text: "Our commitment at Fisheye Interiors is to deliver innovative, high-quality interior solutions built on trust, ensuring customer satisfaction and long-lasting relationships.",
    icon: CommitmentIcon
  }
];

const AboutS4 = () => (
  <div className="aboutS4-container">
    <div className="aboutS4-grid">
      <div className="aboutS4-card aboutS4-card--mission">
        <Image src={rborder} alt="" className="rborder" />
        <Image src={cards[0].icon} alt="" className="aboutS4-icon" />
        <h3>{cards[0].title}</h3>
        <p>{cards[0].text}</p>
        <Image src={lborder} alt="" className="lborder" />
      </div>
      <div className="aboutS4-center">
        <Image src={topImage} alt="Top Room" className="aboutS4-img" />
        <div className="aboutS4-logo">
          <Image src={logo} alt="Fisheye Interior Logo" />
          <div className="aboutS4-brand">
          </div>
        </div>
        <Image src={bottomImage} alt="Bottom Room" className="aboutS4-img-bt" />
      </div>
      <div className="aboutS4-card aboutS4-card--value">
           <Image src={rborder} alt="" className="rborder" />
        <Image src={cards[1].icon} alt="" className="aboutS4-icon" />
        <h3>{cards[1].title}</h3>
        <p>{cards[1].text}</p>
        <Image src={lborder} alt="" className="lborder" />
      </div>
      <div className="aboutS4-card aboutS4-card--vision">
           <Image src={rborder} alt="" className="rborder" />
        <Image src={cards[2].icon} alt="" className="aboutS4-icon" />
        <h3>{cards[2].title}</h3>
        <p>{cards[2].text}</p>
        <Image src={lborder} alt="" className="lborder" />
      </div>
      <div className="aboutS4-card aboutS4-card--commitment">
           <Image src={rborder} alt="" className="rborder" />
        <Image src={cards[3].icon} alt="" className="aboutS4-icon" />
        <h3>{cards[3].title}</h3>
        <p>{cards[3].text}</p>
        <Image src={lborder} alt="" className="lborder" />
      </div>
    </div>
  </div>
);

export default AboutS4;
