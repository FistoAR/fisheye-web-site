import React from "react";
import { FaRegEdit  } from "react-icons/fa";
import { LuPencilRuler  , LuConstruction  } from "react-icons/lu";
import { TbBuildingSkyscraper  } from "react-icons/tb";
import Designimg from './Asset/Design.png'
import Planningimg from './Asset/Planningimg.png'
import Architectureimg from './Asset/Architecture.png'
import Constructionimg from './Asset/Construction.png'
import Lborder from './Asset/Lborder.png'
import LborderW from './Asset/LborderW.png'
import RborderW from './Asset/RborderW.png'
import RborderH from './Asset/RborderH.png'
import Image from "next/image";

const cardData = [
  {
    image: Designimg,
    icon: <LuPencilRuler  />,
    title: "Design",
    desc: "We deliver a value for the dream of clients by our design to make a spacious shelter.."
  },
  {
    image: Planningimg,
    icon: <FaRegEdit />,
    title: "Planning",
    desc: "We plan the accurate project needs perfectly to make it identity to your imagination."
  },
  {
    image: Architectureimg,
    icon: <TbBuildingSkyscraper />,
    title: "Architecture",
    desc: "As an architect we design for the present, with an awareness of the past, for the future expectation.."
  },
   {
    image: Constructionimg,
    icon: <LuConstruction  />,
    title: "Construction",
    desc: "We build a structure to your dream with a unique design, by focusing on quality.."
  }
];

const Contenttwo = () => (
  <div className="content-two-bg">
  <div className="contenttwo-bg">
    <div className="contenttwo-wrapper">
      <h2 className="contenttwo-title">WHAT WE DO ?</h2>
      <p className="contenttwo-desc">
        Fisheye Interior & Construction is a professional firm offering comprehensive services in interiors, construction, and consulting with a focus on quality and timely project completion. As leading interior designers Coimbatore, we deliver innovative interior design services, customized interiors, modular kitchen designs, and commercial and residential interior decoration. Our expertise extends to affordable interior design solutions, modern home interiors, and top interior decorators in coimbatore.
      </p>
      <div className="contenttwo-card-row">
        {cardData.map((card, idx) => (
          <div className="contenttwo-card" key={idx}>
            <Image src={card.image} alt={card.title} className="card-img" />
             <Image src={LborderW} alt="" className="Lborder" />
             <Image src={RborderW} alt="" className="Rborder" />
            <div className="card-hover-content">
               <Image src={Lborder} alt="" className="LborderH" />
              <span className="card-hover-icon">{card.icon}</span>
              <h4 className="card-hover-title">{card.title}</h4>
              <p className="card-hover-desc">{card.desc}</p>
               <Image src={RborderH} alt="" className="RborderH" />
            </div>
            <div className="card-bottom-bar">
              <span className="card-bottom-icon">{card.icon}</span>
              <span className="card-bottom-title">{card.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
);

export default Contenttwo;
