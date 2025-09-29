import React from 'react'
import aboutS1BG from '../ContactTop/house.jpg'
import Image from 'next/image'

const AboutS1 = () => {
  return (
    <div className='ContactTop-container'>
        <Image src={aboutS1BG} alt="" className='ContactTop-img'/>
        <div className='ContactTop-title'>YOUR DREAM <br />WE BUILD....</div>
    </div>
  )
}

export default AboutS1