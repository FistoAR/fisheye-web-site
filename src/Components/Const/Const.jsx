import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";

import ConstIm from "../Asset/construction.webp";
import CommIm from "../Asset/commercial.webp";
import HomeIm from "../Asset/house.webp";
import KitIm from "../Asset/kitchan.webp";
import BathIm from "../Asset/banner1.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Const = () => {
  return (
    <section className="hero-slider hero-style">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        loop={true}
        speed={1000}
        parallax={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="swiper-container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: `url('${ConstIm.src}')`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <div data-swiper-parallax="300" className="slide-title">
                <h2>Residential Construction</h2>
              </div>
              <div data-swiper-parallax="400" className="slide-text">
                <p>
                  Creating dream homes with craftsmanship and attention to
                  detail. Our residential construction services include design
                  consultation, project management, and flawless execution
                  tailored to your unique lifestyle.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: `url('${CommIm.src}')`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <div data-swiper-parallax="300" className="slide-title">
                <h2>Architectural Construction</h2>
              </div>
              <div data-swiper-parallax="400" className="slide-text">
                <p>
                  Innovative architectural construction that blends aesthetics
                  with functionality. We collaborate closely with architects to
                  realize cutting-edge designs while ensuring structural
                  integrity.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: `url('${HomeIm.src}')`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <div data-swiper-parallax="300" className="slide-title">
                <h2> Commercial Construction</h2>
              </div>
              <div data-swiper-parallax="400" className="slide-text">
                <p>
                  Building business spaces that promote productivity and
                  professionalism. Our experience spans offices, retail outlets,
                  and industrial facilities, incorporating modern construction
                  methods and durable materials.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4*/}
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: `url('${KitIm.src}')`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <div data-swiper-parallax="300" className="slide-title">
                <h2>ACP Elevation</h2>
              </div>
              <div data-swiper-parallax="400" className="slide-text">
                <p>
                  Enhancing your space with Aluminum Composite Panel (ACP)
                  solutions that offer durability, aesthetics, and weather
                  resistance.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        {/* <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: `url('${BathIm.src}')`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <div data-swiper-parallax="300" className="slide-title">
                <h2>BATHROOM</h2>
              </div>
              <div data-swiper-parallax="400" className="slide-text">
                <p>Timeless designs for modern lifestyles</p>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        {/* Swiper Controls */}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </section>
  );
};

export default Const;
