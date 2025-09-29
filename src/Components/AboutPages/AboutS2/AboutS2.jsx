import React from 'react'
import ABTarrow from '../AboutS3/Arrow.svg';
import ABTinnovative from '../AboutS3/innovative.svg';
import ABTprice from '../AboutS3/Price.svg';
import ABTstandard from '../AboutS3/Standard.svg';
import ABTstar from '../AboutS3/Star.svg';
import ABTtime from '../AboutS3/Time.svg';
import Image from 'next/image'


const AboutS2 = () => {


const features = [
  { icon: ABTinnovative , label: "Innovative Design" },
  { icon: ABTarrow, label: "Perfect Planning" },
  { icon: ABTprice, label: "Reasonable Price" },
  { icon: ABTtime, label: "Timely Completion" },
  { icon: ABTstandard, label: "Standard Quality" },
  { icon: ABTstar, label: "Customer Satisfaction" },
];



  return (
    <div className='aboutS2-container'>
        <div className="aboutS2-head">
            <h4>Who We Are?</h4>
            <p>Fisheye Interior & Construction is a premier interior design and construction firm based in Coimbatore, dedicated to transforming spaces with creativity and precision. With over 6 years of experience, we offer comprehensive services spanning residential and commercial interior design, customized interiors, modular kitchen solutions, and reliable construction services.</p>
         <div className="aboutS3-features-row">
      {features.map((feat, idx) => (
        <div className="aboutS3-card" key={idx}>
          <Image src={feat.icon} alt={feat.label} className="aboutS3-icon" />
          <div className="aboutS3-label">{feat.label}</div>
        </div>
      ))}
        </div>
    </div>
    </div>
  )
}

export default AboutS2