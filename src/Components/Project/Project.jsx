import React from "react";
import constructionhome from '../Asset/construction.webp'
import commercialhome from '../Asset/commercial.webp'
import househome from '../Asset/house.webp'
import kitchanhome from '../Asset/kitchan.webp'
import bathroomhome from '../Asset/banner1.webp'
import officehome from '../Asset/office.webp'
import Image from "next/image";

const projects = [
  {
    title: "CONSTRUCTION",
    image: constructionhome,
  },
  {
    title: "COMMERCIAL",
    image: commercialhome,
  },
  {
    title: "HOUSE",
    image: househome,
  },
  {
    title: "KITCHEN",
    image: kitchanhome,
  },
  {
    title: "BATHROOM",
    image: bathroomhome ,
  },
  {
    title: "OFFICE",
    image: officehome,
  },
];

const Project = () => (
  <div className="projecthead">
     <h4 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="projects-title">OUR LATEST PROJECTS</h4>
  <div className="projects-grid-section">
    <div className="projects-grid">
      {projects.map((item, idx) => (
        <div className={`projects-grid-card ${idx % 2 === 0 ? "up" : "down"}`} key={item.title}>
          <Image src={item.image} alt={item.title} />
          <div className="projects-grid-title">{item.title}</div>
        </div>
      ))}
    </div>
  </div>
  </div>
);

export default Project;
