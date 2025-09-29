import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Gallerys from '../Components/Gallerys/Gallerys'
// import { Helmet } from 'react-helmet';
import Head from 'next/head';

const Gallery = () => {
  return (
    <div>
      <Head>
        <title>Gallery of Home Interior Designs | Original Photographs by Fisheye </title>
        <meta name="description" content="Fisheye Home Interiors gallery demonstrates designs of modular kitchen, bedroom, living and dining. View photos of interior works across Coimbatore." />
        <meta name="keywords" content="home interior gallery, modular kitchen photos, bedroom design images, living room interiors, dining room designs, interior design portfolio, contemporary interiors, modern kitchen gallery, stylish room interiors, interior design photographs, modular furniture designs, client projects, home decor gallery, luxury interiors gallery, interior inspiration" />
        <meta property="og:title" content="Gallery of Home Interior Designs | Original Photographs by Fisheye" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fisheye-interior.com/assets/images/gallery-og-image.jpg" />
        <meta property="og:url" content="https://fisheye-interior.com/gallery" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:description" content="Fisheye Home Interiors gallery demonstrates designs of modular kitchen, bedroom, living and dining. View photos of interior works across Coimbatore." />
        <meta property="og:site_name" content="Fisheye Interiors" />
         <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <div className="gallery-container">
       <Gallerys />
      </div>
    </div>
  )
}

export default Gallery