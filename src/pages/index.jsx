// Home.jsx
import Head from 'next/head';
import React, { useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Content from '../Components/Content/Content';
import ContentTwo from '../Components/Contenttwo/Contenttwo';
import ContentFour from '../Components/Contentfour/Contentfour';
import Construction from '../Components/Construction/Construction'
import Project from '../Components/Project/Project';
import LetsTalk from '../Components/LetsTalk/LetsTalk';

// import {logo_img} from '../Components/Header/FishII logo.png'


const Home = () => {
  const aboutRef = useRef(null);


  const handleScrollTo = (section) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } 
  };

  return (
    
    <div>
      <Head>
        <title>Best Interior Designers in Coimbatore | Fisheye interiors</title>
        <meta name="description" content="Looking for the Best Interior Designers in Coimbatore? Fisheye interiors is a leading and 6+ Years Experienced Interior Decorators in Coimbatore." data-react-helmet="true"  />
        <meta name="keywords" content="interior designers Coimbatore, best interior designers, home interior decorators, modular kitchen designs, interior decoration, customized interiors, living room design, bedroom interiors, interior designers India, affordable interior design, modern home interiors, interior design services, top interior decorators, residential interior design, interior design company" />
        <meta property="og:title" content="Best Interior Designers in Coimbatore | Fisheye Interiors" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fisheye-interior.com/assets/images/homepage-og-image.jpg" />
        <meta property="og:url" content="https://fisheye-interior.com" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:description" content="Looking for the Best Interior Designers in Coimbatore? Fisheye Interiors is a leading and 6+ Years Experienced Interior Decorators in Coimbatore." />
        <meta property="og:site_name" content="Fisheye Interiors" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar handleScrollTo={handleScrollTo} />
      <div className="home_margin">
      <Construction />
      
      <div ref={aboutRef}><Content /></div>
      <div ><ContentTwo /></div>
      <Project />
      <ContentFour />
      <LetsTalk />

      </div>
    </div>
  );
};

export default Home;
