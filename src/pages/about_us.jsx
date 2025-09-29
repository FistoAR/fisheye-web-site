import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutPages from '../Components/AboutPages/AboutPages'
import Head from 'next/head';


const About = () => {
  return (
    <div className='top-about'>
      <Head>
        <title>Interior Design Company in India |Fisheye Interiors</title>
        <meta name="description" content="We are highly trusted and well experienced in the industry for over 6+ years in Coimbatore. We are end to end solution for interior designs." />
        <meta name="keywords" content="interior design company, interior designers India, trusted interior designers, experienced interior decorators, home interior experts, end to end interior solutions, residential interiors, office interior design, modular kitchen experts, interior renovation services, interior design firm, interior design team, personalized interiors, interior consultation, interior design agency" />
        <meta property="og:title" content="Interior Design Company in India | Fisheye Interiors" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fisheye-interior.com/assets/images/about-us-og-image.jpg" />
        <meta property="og:url" content="https://fisheye-interior.com/about-us" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:description" content="We are highly trusted and well experienced in the industry for over 6+ years in Coimbatore. We are end to end solution for interior designs." />
        <meta property="og:site_name" content="Fisheye Interiors" />
         <link rel="icon" href="/logo.png" />
      </Head>
      
      <Navbar />
      <AboutPages />
    </div>
  )
}

export default About