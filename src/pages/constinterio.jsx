import React from 'react'
// import Navbar from '../Navbar/Navbar';
import Const from '../Components/Const/Const';
import ConstAbt from '../Components/ConstAbt/ConstAbt';
import ConstList from '../Components/ConstList/ConstList';
import Project from '../Components/Project/Project'
import LetsTalk from '../Components/LetsTalk/LetsTalk'
import { Helmet } from 'react-helmet';
import Head from 'next/head';
import Navbar from '@/Components/Navbar/Navbar';

const Construction = () => {
  return (
    <div className='const'>
      <Head>
        <title>Fisheye Interiors: Construction Services | Modular, Civil & Interior Works </title>
        <meta name="description" content="Upgrade your space with Fisheye Interiors experts in construction, modular solutions, and  interior works. Quality, timely delivery & custom design assured." />
        <meta name="keywords" content="construction services, interior construction, modular construction, interior renovation, civil works, modular kitchen construction, turnkey construction, interior solution providers, residential construction, commercial interiors, design build, construction management, project execution, interior contractors, construction company" />
        <meta property="og:title" content="Fisheye Interiors: Construction Services | Modular, Civil & Interior Works" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fisheye-interior.com/assets/images/construction-og-image.jpg" />
        <meta property="og:url" content="https://fisheye-interior.com/construction" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:description" content="Upgrade your space with Fisheye Interiors experts in construction, modular solutions, and interior works. Quality, timely delivery & custom design assured." />
        <meta property="og:site_name" content="Fisheye Interiors" />
         <link rel="icon" href="/logo.png" />
      </Head>
        <Navbar />
        <Const />
        <ConstAbt />
        <ConstList />
        <Project />
        <LetsTalk />
    </div>
  )
}

export default Construction