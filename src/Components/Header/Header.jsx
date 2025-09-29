import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  {
    image: require('../Asset/construction.jpg'),
    title: "CONSTRUCTION",
    subtitle: "Innovative construction solutions for modern living",
  },
  {
    image: require('../Asset/commercial.jpg'),
    title: "Commercial Spaces that Inspire",
    subtitle: "Designs that drive business success and productivity",
  },
  {
    image: require('../Asset/house.jpg'),
    title: "Crafting Your Perfect Home",
    subtitle: "Creating comfortable and stylish residential spaces",
  },
  {
    image: require('../Asset/kitchan.jpg'),
    title: "Kitchens that Blend Form and Function",
    subtitle: "Where culinary art meets elegant design",
  },
  {
    image: require('../Asset/banner1.jpg'),
    title: "Elevate Your Interiors with Elegance",
    subtitle: "Timeless designs for modern lifestyles",
  },
  {
    image: require('../Asset/office.jpg'),
    title: "Office Spaces Designed to Perform",
    subtitle: "Empowering productivity through smart design",
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFadeIn(true);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setFadeIn(true);
    }, 600);
  };

  const nextSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFadeIn(true);
    }, 600);
  };

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <header className="header">
      <div
        className={`bg-image ${fadeIn ? "fade-in" : "fade-out"}`}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="header-overlay" />

      <button className="bg-btn bg-btn-left" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="bg-btn bg-btn-right" onClick={nextSlide}>
        <FaArrowRight />
      </button>

      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Explore More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
