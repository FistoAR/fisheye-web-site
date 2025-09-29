import React, { useState } from "react";
import "./Contentthree.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import project1 from './gallery7.webp'
import project2 from './2.webp'
import project3 from './3.webp'
import project4 from './4.webp'
import project5 from './5.webp'
import project6 from './6.webp'
import project7 from './1.webp'

const ContentThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of 7 project images
  const projectImages = [
    {
      id: 1,
      src: project2,
      alt: "Modern Dining Room"
    },
    {
      id: 2,
      src: project2, 
      alt: "Luxury Living Room"
    },
    {
      id: 3,
      src: project3,
      alt: "Contemporary Bedroom"
    },
    {
      id: 4,
      src: project4,
      alt: "Elegant Kitchen"
    },
    {
      id: 5,
      src: project5,
      alt: "Modern Office"
    },
    {
      id: 6,
      src: project6,
      alt: "Stylish Bathroom"
    },
    {
      id: 7,
      src: project7,
      alt: "Minimalist Living"
    }
  ];

  // Number of images to show at once
  const imagesPerSlide = 3;
  const totalSlides = Math.ceil(projectImages.length - imagesPerSlide + 1);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => 
      prev >= totalSlides - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prev => 
      prev <= 0 ? totalSlides - 1 : prev - 1
    );
  };

  return (
    <section className="content-three" >
      <div className="projects-container">
        
        {/* Header with Title and Navigation */}
        <div className="projects-header">
          <h4 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="projects-titles">Our Latest Projects</h4>
          
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="projects-navigation">
            <button 
              className="nav-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous projects"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="nav-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next projects"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"className="projects-slider">
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{
                transform: `translateX(-${currentSlide * (100 / imagesPerSlide)}%)`
              }}
            >
              {projectImages.map((image) => (
                <div key={image.id} className="project-slide">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/400/300?random=${image.id}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentThree;
