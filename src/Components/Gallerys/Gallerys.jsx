import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "splitting/dist/splitting.css";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { useRouter } from "next/router";



// ================== GALLERY DATA ==================
import bed1 from './bed/1.webp';
import bed2 from './bed/IMG-20230221-WA0006.webp';
import bed3 from './bed/IMG-20230221-WA0010.webp';
import bed4 from './bed/IMG-20230221-WA0015.webp';
import bed5 from './bed/IMG-20230221-WA0019.webp';
import ceilling1 from './ceilling/IMG-20230221-WA0007.webp';
import ceilling2 from './ceilling/IMG-20230221-WA0008.webp';
import ceilling3 from './ceilling/IMG-20230221-WA0009.webp';
import ceilling4 from './ceilling/IMG-20230221-WA0012.webp';
import ceilling5 from './ceilling/IMG-20230221-WA0020.webp';
import ceilling6 from './ceilling/IMG-20230221-WA0023.webp';
import Bathroom1 from './Bathrooms/bathroomInterior.webp';
import Bathroom2 from './Bathrooms/bathromBlWh.webp';
import Bathroom3 from './Bathrooms/bathroomDesign.webp';
import Bathroom4 from './Bathrooms/bathroomTop.webp';
import Bathroom5 from './Bathrooms/BathrromClean.webp';
import Bathroom6 from './Bathrooms/bathrromTopView.webp';
import Kitchen1 from './Kitchen/KitchenHome.webp';
import Kitchen2 from './Kitchen/Kitchen1.webp';
import Kitchen3 from './Kitchen/Kitchen2.webp';
import Kitchen4 from './Kitchen/Kitchen3.webp';
import Kitchen5 from './Kitchen/Kitchen4.webp';
import Kitchen6 from './Kitchen/Kitchen5.webp';
import Kitchen7 from './Kitchen/Kitchen6.webp';
import Kitchen8 from './Kitchen/Kitchen7.webp';
// import Kitchen9 from './Kitchen/Kitchen8.webp';
// import Kitchen10 from './Kitchen/Kitchen9.webp';
import interiorHome from './Interiors/InteriorHome.webp';
import interiorCubboard from './Interiors/InteriorCubboard.webp';
import interiorCupboard from './Interiors/InteriorCupboards.webp';
import interiorDoor from './Interiors/InteriorDoor.webp';
import interiorKitchenWay from './Interiors/InteriorKitchenway.webp';
import interiorPooja from './Interiors/InteriorPooja.webp';
import interiorTV from './Interiors/InteriorTV.webp';
import interiorTvSpace from './Interiors/InteriorTvSpace.webp';
import Hotel from './Hotel/Hotel.webp';
import HotelCash from './Hotel/HotelCash.webp';
import HotelCeilling from './Hotel/HotelCeilling.webp';
import HotelDinning from './Hotel/HotelDinning.webp';
import HotelWall from './Hotel/HotelWall.webp';
import Image from "next/image";

const galleries = [
  {
    id: 1,
    slug: "bedroom_spaces",
    title: "Bedroom Spaces",
    para: "Discover bedroom spaces that combine luxury and comfort.",
    para2:"Discover luxurious and comfortable bedroom spaces designed by Fisheye Interiors in Coimbatore. Our bedroom interiors blend elegance with coziness, using premium materials and personalized touches to create restful retreats tailored to your lifestyle. Experience the best in residential interior design with us.",
    images: [
      { src: bed1, name: "Horizon Urban Hub" },
      { src: bed2, name: "Heritage Grand Hotel" },
      { src: bed3, name: "Modern Office Space" },
      { src: bed4, name: "Cozy Home" },
      { src: bed5, name: "Luxury Villa" },
      { src: bed5, name: "Luxury Villa" },
    ],
  },
  {
    id: 2,
    slug: "creative_ceilings",
    title: "Creative Ceilings",
    para: "Explore creative ceiling designs that enhance your living space.",
    para2:"Explore innovative ceiling designs that add character and charm to your living spaces. From modern minimalist styles to intricate patterns, our creative ceilings enhance aesthetics and bring a fresh look to your home or office interiors in Coimbatore.",
    images: [
      { src: ceilling1, name: "Creative Studio" },
      { src: ceilling2, name: "Contemporary Loft" },
      { src: ceilling3, name: "Beach House" },
      { src: ceilling4, name: "Urban Apartment" },
      { src: ceilling5, name: "Penthouse Suite" },
      { src: ceilling6, name: "Penthouse Suite" },
    ],
  },
  {
    id: 3,
    slug: "bathrooms_countryside_homes",
    title: "Bathrooms & Countryside Homes",
    para: "Bathroom designs and countryside homes that inspire relaxation.",
    para2:"Find inspiration in our bathroom designs and home interiors that promote relaxation and timeless style. Fisheye Interiors crafts luxurious yet functional bathrooms with modern fixtures and thoughtful layouts that suit rural and urban living alike",
    images: [
      { src: Bathroom1, name: "Country Cottage" },
      { src: Bathroom2, name: "Mountain Cabin" },
      { src: Bathroom3, name: "Lake House" },
      { src: Bathroom4, name: "Urban Flat" },
      { src: Bathroom5, name: "Modern Bungalow" },
      { src: Bathroom6, name: "Modern Bungalow" },
    ],
  },
  {
    id: 4,
    slug: "modern_kitchens",
    title: "Modern Kitchens",
    para: "Modern kitchens with fabulous design and premium materials.",
    para2:"Step into modern kitchens featuring fabulous design and high-quality materials. We specialize in modular kitchen designs in Coimbatore that maximize space and efficiency while reflecting contemporary style, perfect for homes and commercial spaces.",
    images: [
      { src: Kitchen1, name: "Artistic Space" },
      { src: Kitchen2, name: "Eco Villa" },
      { src: Kitchen3, name: "Loft Studio" },
      { src: Kitchen4, name: "Modern Farmhouse" },
      { src: Kitchen5, name: "Coastal Home" },
      { src: Kitchen6, name: "Coastal Home" },
      { src: Kitchen7, name: "Coastal Home" },
      { src: Kitchen8, name: "Coastal Home" },
      // { src: Kitchen9, name: "Coastal Home" },
      // { src: Kitchen10, name: "Coastal Home" },
    ],
  },
  {
    id: 5,
    slug: "interior_spaces",
    title: "Interior Spaces",
    para: "Interior spaces that blend aesthetics and functionality.",
    para2:"Our interior spaces seamlessly blend aesthetics and functionality to transform your home or workplace. From living rooms to office interiors, Fisheye Interiors offers customized solutions that reflect sophistication and practicality.",
    images: [
      { src: interiorHome, name: "Artistic Space" },
      { src: interiorCubboard, name: "Eco Villa" },
      { src: interiorCupboard, name: "Loft Studio" },
      { src: interiorDoor, name: "Modern Farmhouse" },
      { src: interiorKitchenWay, name: "Coastal Home" },
      { src: interiorPooja, name: "Coastal Home" },
      { src: interiorTV, name: "Coastal Home" },
      { src: interiorTvSpace, name: "Coastal Home" },
    ],
  },
  {
    id: 6,
    slug: "hotel_spaces",
    title: "Hotel Spaces",
    para: "Luxurious hotel interiors with timeless design.",
    para2:"Experience luxury with our hotel interior designs that combine timeless elegance and modern flair. Our expert team in Coimbatore delivers premium hospitality interiors crafted to impress guests and enhance brand identity.",
    images: [
      { src: Hotel, name: "Artistic Space" },
      { src: HotelCash, name: "Eco Villa" },
      { src: HotelCeilling, name: "Loft Studio" },
      { src: HotelDinning, name: "Modern Farmhouse" },
      { src: HotelWall, name: "Coastal Home" },
      { src: HotelWall, name: "Coastal Home" },
    ],
  },
];


gsap.registerPlugin(ScrollTrigger);
// ================== COMPONENT ==================
const Gallerys = () => {
  const containerRef = useRef();

  useEffect(() => {
  const init = async () => {
    if (typeof window === 'undefined') return;

    const Splitting = (await import('splitting')).default;
    Splitting({ whitespace: true });

    const sections = containerRef.current.querySelectorAll(".gallery-section");

    sections.forEach((section) => {
      const titleChars = section.querySelectorAll(".split-text .char");
      const img = section.querySelector("img");
      const para = section.querySelector("p");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      tl.to(titleChars, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: { amount: 1, from: "start" },
      })
        .to(
          img,
          {
            filter: "brightness(1)",
            clipPath: "circle(40rem at 50% 50%)",
            scale: 1,
            duration: 2.5,
            ease: "expo.inOut",
          },
          "-=1.5"
        )
        .fromTo(
          para,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=1"
        );
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  };

  init();
}, []);


  const router = useRouter();

  const handleSectionClick = (slug) => {
    window.open(`/gallery/${slug}.html`, "_blank"); 
  };
  return (
    <div className="gallery-main-container" ref={containerRef}>
      <div className="gallery-section-grid">
        {galleries.map((section) => (
          <div
            key={section.id}
            className="gallery-section"
            onClick={() => handleSectionClick(section.slug)}
            role="button"
            tabIndex={0}
            onKeyPress={() => handleSectionClick(section.slug)}
            aria-label={`Open gallery section ${section.title}`}
          >
            <Image
              src={section.images[0].src}
              alt={section.title}
              className="gallery-section-img"
            />
            <div className="gallery-section-info">
              <h4 className="split-text" data-splitting>
                {section.title}
              </h4>
              <p>{section.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallerys;
export { galleries };  // 👈 add this

