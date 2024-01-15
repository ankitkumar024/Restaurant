import React from 'react'
import './hero.css'
import { heroImg } from '../../assets/index'

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero_img' src={heroImg} />
      <div className='hero-content'>
        <h1 className='hero-content-header'>Taste the rich flavour of high quality meals</h1>
        <p className="hero-content-para">We only use the five star quality for our menu, come and get the richness in every meals we serve.</p>
        <button className='hero-content-btn'>Go to Menu</button>
      </div>
    </div>
  )
}

export default Hero