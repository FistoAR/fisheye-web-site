import React from "react";
import leftimg from './int-1.webp'
import centimg from './int-2.webp'
import rigthimg from './int-3.webp'
import fisheye_BW_logo from '../Asset/fisheye_BW_logo.png'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";


function AnimatedNumber({ end }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? end : 0 },
    reset: !inView,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <span ref={ref} className="stats-number">
      <animated.span>
        {number.to((n) => n.toFixed(0))}
      </animated.span>
      +
    </span>
  );
}

const Content = () => {
  return (
    <section  className="content">
      <div className="content-container">
        
        {/* Top Title */}
        
        {/* Image Gallery */}
        <div  className="image-gallery">
          <div  data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="100" className="gallery-item">
            <Image src={leftimg} alt="Artistic Living Room" />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="gallery-item1">
            <Image src={centimg} alt="Modern Living Space" />
          </div>
          <div  data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="100" className="gallery-item2">
            <Image src={rigthimg} alt="Luxury Bathroom" />
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h1  data-aos="fade-up-right" data-aos-duration="1000" className="about-heading">ABOUT US</h1>
          <div>
            <Image src={fisheye_BW_logo} alt="fisheye black and white logo" className="about_fisheyelogo"/>
            <h4 className="about-fisheye">FISH EYE INTERIORS</h4>
          <p  data-aos="fade-up-left" data-aos-duration="1000" className="about-text">
            Where Creativity Meets Comfort. Aura Spaces Transforms Homes, Offices, And Commercial Areas 
            Into Stunning, Functional Environments Tailored To Your Style And Needs. From Modern Minimalism 
            To Timeless Elegance, We Bring Your Vision To Life With Thoughtful Design And Expert Execution.
          </p>
          </div>
              <div className="stats-container">
                <div className="stat-block">
                  <AnimatedNumber end={6} />
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-block">
                  <AnimatedNumber end={100} />
                  <div className="stat-label">Completed Projects</div>
                </div>
                <div className="stat-block">
                  <AnimatedNumber end={40} />
                  <div className="stat-label">Client Reviews</div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
