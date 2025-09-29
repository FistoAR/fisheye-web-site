import React from "react";
import Color from "color";
import "./ImageCeilling.css";
import bed from './Designing.webp';
import bedgrid from './Designing.webp';
import bedimg from './Designing.webp';
import Navbar from "../../Navbar/Navbar";

const cardData = [
  { image: bed, title: "Resilience" },
  { image: bedgrid, title: "Growth" },
  { image: bedimg, title: "Engagement" },
  { image: bed, title: "Visioning" },
  { image: bedgrid, title: "Goal Orientation" },
  { image: bedimg, title: "Self-belief" }
];

function HighlightCard({ image, title, color = "#000" }) {
  // Darken the color for text contrast
  const textColor = Color(color).darken(0.7).rgb().string();

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${image})`, color: textColor }}
      aria-label={title}
    >
      <div className="card__overlay" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
      </div>
    </div>
  );
}

function HighlightCardGrid({ children }) {
  return <div className="card-grid">{children}</div>;
}

export default function Gridimages() {
  return (
    <>
    <Navbar />
      <HighlightCardGrid>
        {cardData.map((card, i) => (
          <HighlightCard key={i} {...card} />
        ))}
      </HighlightCardGrid>
    </>
  );
}
