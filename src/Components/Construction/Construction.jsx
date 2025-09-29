import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import construction from '../Asset/construction.webp';
import Image from 'next/image'

const Construction = () => {
  const loaderVideoRef = useRef(null);
  const lenisRef = useRef(null);
  const controllerRef = useRef(null);
  const [scrollMoved, setScrollMoved] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return; // ✅ avoid SSR crash

    const handleScroll = () => {
      setScrollMoved(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    let controller;


    const preloader = document.getElementById("preloader");
  
    setTimeout(() => {
      if (preloader) preloader.style.display = "none";
    }, 4000);

    const loaderVideo = loaderVideoRef.current;
    if (loaderVideo) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
      setTimeout(() => {
        loaderVideo.style.width = "90%";
        loaderVideo.style.height = "90%";
        loaderVideo.style.transform = "translate(-50%, -50%)";
        loaderVideo.style.top = "50%";
        loaderVideo.style.left = "50%";
        loaderVideo.style.position = "fixed";
        loaderVideo.style.borderRadius = "12px";
      }, 2000);
      setTimeout(() => {
        if (window.matchMedia("(max-width: 576px)").matches) {
          Object.assign(loaderVideo.style, {
            width: "220px",
            height: "220px",
            top: "30%",
            left: "22%",
            right: "auto",
            transform: "translate(0%, -25%)",
          });
        } else if (window.matchMedia("(max-width: 768px)").matches) {
          Object.assign(loaderVideo.style, {
            width: "380px",
            height: "380px",
            top: "40%",
            left: "25%",
            transform: "translate(0%, -50%)",
          });
        } else if (window.matchMedia("(max-width: 991px)").matches) {
          Object.assign(loaderVideo.style, {
            width: "380px",
            height: "380px",
            left: "25%",
            top: "35%",
            right: "0px",
            transform: "translate(0%, -50%)",
          });
        } else if (window.matchMedia("(max-width: 1199px)").matches) {
          Object.assign(loaderVideo.style, {
            width: "400px",
            height: "400px",
            left: "auto",
            right: "60px",
            transform: "translate(0%, -50%)",
          });
        } else if (window.matchMedia("(max-width: 1399px)").matches) {
          Object.assign(loaderVideo.style, {
            width: "450px",
            height: "450px",
            left: "auto",
            right: "80px",
            transform: "translate(0%, -50%)",
          });
        } else {
          Object.assign(loaderVideo.style, {
            width: "500px",
            height: "500px",
            top: "50%",
            left: "auto",
            right: "100px",
            transform: "translate(0%, -50%)",
            position: "absolute",
          });
        }
        document.body.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("overflow-hidden");
      }, 3000);
    }
  }, []);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ScrollMagic controller
    let controller;
     const setupScrollMagic = async () => {
    if (typeof window === 'undefined') return;

      const ScrollMagic = (await import('scrollmagic')).default;

      controller = new ScrollMagic.Controller();
      controllerRef.current = controller;

      // Pin sections as required
      new ScrollMagic.Scene({
        triggerElement: "#section2",
        triggerHook: "onEnter",
        duration: "100%",
      })
        .setPin("#section1 .pinWrapper", { pushFollowers: false })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#section2",
        triggerHook: "onEnter",
        duration: "200%",
      })
        .setPin("#section2 .pinWrapper", { pushFollowers: false })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#section3",
        triggerHook: "onEnter",
        duration: "200%",
      })
        .setPin("#section3 .pinWrapper", { pushFollowers: false })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#section4",
        triggerHook: "onEnter",
        duration: "400%",
      })
        .setPin("#section4 .pinWrapper", { pushFollowers: false })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#section5",
        triggerHook: "onEnter",
        duration: "400%",
      })
        .setPin("#section5 .pinWrapper", { pushFollowers: false })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#section6",
        triggerHook: "onEnter",
        duration: "100%",
      })
        .setPin("#section6 .pinWrapper", { pushFollowers: false })
        .addTo(controller);
     }

     setupScrollMagic();
    return () => {
      controller?.destroy(true);
    };
  }, []);

  return (
    <>
      <section className="events-page">
        {/* Section 1 */}
        <div id="section1" className="event home-content-div">
          <div className="pinWrapper">
            <div className="text">
              <h2>CONSTRUCTION</h2>
              <p>Fisheye Interiors, Coimbatore’s trusted firm with 6+ years expertise, delivers innovative construction and elegant interior design solutions for modern living.</p>
            </div>
            <div className="image" id="loaderVideo" ref={loaderVideoRef}>
              <Image src={construction} alt="Construction" />
            </div>
          </div>
          <div className={`scrollBtn ${scrollMoved ? "move" : ""}`}>
            <h6>scroll</h6>
            <span></span>
          </div>
        </div>

        {/* Section 2 */}
        <div id="section2" className="event home-content-div">
          <div className="pinWrapper">
            <div className="text">
              <h2>Commercial </h2>
              <p>Fisheye Interiors, top interior designers in Coimbatore, deliver modern home interiors, functional residential spaces, and commercial designs that boost success, style, and productivity. </p>
            </div>
            <div className="image"></div>
          </div>
        </div>

        {/* Section 3 */}
        <div id="section3" className="event home-content-div">
          <div className="pinWrapper">
            <div className="text">
              <h2>Crafting Home</h2>
              <p>Fisheye Interiors, top interior designers in Coimbatore, craft stylish and comfortable homes with customized interiors, modular kitchens, bedroom and living room designs for modern living</p>
            </div>
            <div className="image"></div>
          </div>
        </div>

        {/* Section 4 */}
        <div id="section4" className="event home-content-div">
          <div className="pinWrapper">
            <div className="text">
              <h2>Kitchen Interior Design</h2>
              <p>Fisheye Interiors offers stylish modular kitchen designs in Coimbatore with smart storage, easy maintenance, and modern aesthetics. Trusted interior designers for durable, functional, and elegant kitchens.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>

        {/* Section 5 */}
        <div id="section5" className="event home-content-div">
          <div className="pinWrapper">
            <div className="text">
              <h2>Bathroom Interior</h2>
              <p>Transform your bathroom with Fisheye Interiors, Coimbatore’s trusted interior designers. We offer affordable bathroom renovation, modern interiors, and expert design solutions.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>

        {/* Section 6 */}
        <div id="section6" className="event home-content-div">
          <div className="pinWrapper">
            <div className="text">
              <h2>Office Interior Design</h2>
              <p>Fisheye Interiors provides expert office interior design in Coimbatore, creating modern, functional, and inspiring workspaces. Trusted office interior designers in Coimbatore for customized solutions</p>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>

      {/* Preloader */}

    </>
  );
};

export default Construction;
