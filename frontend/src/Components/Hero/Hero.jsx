import React from 'react'
import './Hero.css'
import original from '../Assets/original.webp'
const Hero = () => {


    

  return (
    <div className='hero'>

    <div className="hero-left">
        <h2>Making Health Care<br></br> Better Together :)</h2>
        
    </div>

    <div className="hero-right">
    <img src={original} alt=""/>
    
        
    </div>
      
    </div>
  )
}

export default Hero
