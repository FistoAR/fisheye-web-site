import React from 'react'
import AboutS1 from './AboutS1/AboutS1'
import AboutS2 from './AboutS2/AboutS2'
import AboutS4 from './AboutS4/AboutS4'
import AboutS5 from './AboutS5/AboutS5'
import LetsTalk from '../LetsTalk/LetsTalk'

const AboutPages = () => {
  return (
    <div className='aboutpage-container'>
        <div className="about-title">
            <AboutS1 />
            <AboutS2 />
            <AboutS4 />
            <AboutS5 />
            <LetsTalk />
        </div>
    </div>
  )
}

export default AboutPages