import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft , BiSolidQuoteAltRight } from "react-icons/bi";

import curve from "../Contentfour/Vector 4.png"
import Image from "next/image";

const ContentFour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonials data
  const testimonials = [
    [
      {
        id: 1,
        text: "Exceptional Work! From The Initial Consultation To The Final Reveal, Your Team Signify Professionalism .",
        name: "Sophie Carter",
        position: "Designer"
      },
      {
        id: 2,
        text: "Exceptional Work! From The Initial Consultation To The Final Reveal, Your Team Signify Professionalism.",
        name: "James Bennett",
        position: "Product Manager"
      }
    ],
    [
      {
        id: 3,
        text: "The Attention To Detail And Creative Solutions Provided Were Outstanding. Highly Recommend Their Services.",
        name: "Emily Rodriguez",
        position: "Architect"
      },
      {
        id: 4,
        text: "Professional Team With Great Vision. They Transformed Our Space Beyond Our Wildest Dreams.",
        name: "Michael Johnson",
        position: "Business Owner"
      }
    ],
    [
      {
        id: 5,
        text: "Quality Craftsmanship And Excellent Customer Service. The Project Was Completed On Time And Budget.",
        name: "Sarah Williams",
        position: "Interior Stylist"
      },
      {
        id: 6,
        text: "Amazing Results! The Team Understood Our Vision Perfectly And Delivered Beyond Expectations.",
        name: "David Chen",
        position: "Homeowner"
      }
    ]
  ];

  const totalSlides = testimonials.length;

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="content-four">
      <div className="testimonials-wrapper">

        
        {/* Header */}
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="section-header">
          <h3 className="section-title">
            What People Think<br />About Us
          </h3>
        </div>
        <Image src={curve} alt="" className="curvelogo"/>

        {/* Testimonial Cards */}
        <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="100" className="testimonials-grid">
          {testimonials[currentSlide].map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div  className="quote-icons">
                <BiSolidQuoteAltLeft className="quote-icon" />
              </div>
              <p className="testimonial-text">
                {testimonial.text}
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}  </h4>
                <p className="author-position">{testimonial.position} <span className="star">  <FaStar />  <FaStar />  <FaStar />  <FaStar />  <FaStar /> </span> </p>
              </div>
               <div  className="quote-icons-r">
                <BiSolidQuoteAltRight className="quote-icon-r" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div  className="navigation-controls">
          <button 
            className="nav-button prev-button" 
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>
          <button 
            className="nav-button next-button" 
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentFour;
