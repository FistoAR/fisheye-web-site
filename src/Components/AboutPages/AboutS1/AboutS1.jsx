import React from 'react'
import aboutS1BG from '../AboutS1/house.jpg'
import Image from 'next/image'

const AboutS1 = () => {
  return (
    <div className='aboutS1-container'>
        <Image src={aboutS1BG} alt="" className='S1BG-img'/>
        <div className='aboutS1-title'>YOUR DREAM <br />WE BUILD....</div>
    </div>
  )
}

export default AboutS1