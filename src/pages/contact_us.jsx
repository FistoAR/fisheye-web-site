import React from 'react'
import Contact from '../Components/Contact/Contact'
import Navbar from '../Components/Navbar/Navbar'
import Head from 'next/head';


const Contactt = () => {
  return (
    <div>
    <Head>
        <title>Contact Fisheye Interiors | Most Reliable Brand in Interiors </title>
        <meta name="description" content="Transform your space with top interior designers offering customized home interiors, modular kitchens & complete furnishing solutions" />
        <meta name="keywords" content="contact interior designers, reliable interior company, modular kitchen experts, interior consultation, interior design inquiry, furnished homes, customized interiors, home interior contact, professional interior designers, interior services contact, interior solutions, design consultation, interior designer near me, customer support interior, personalized design" />
        <meta property="og:title" content="Contact Fisheye Interiors | Most Reliable Brand in Interiors" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fisheye-interior.com/assets/images/contact-og-image.jpg" />
        <meta property="og:url" content="https://fisheye-interior.com/contact" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:description" content="Transform your space with top interior designers offering customized home interiors, modular kitchens & complete furnishing solutions." />
        <meta property="og:site_name" content="Fisheye Interiors" />
         <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Contact />
    </div>
  )
}

export default Contactt