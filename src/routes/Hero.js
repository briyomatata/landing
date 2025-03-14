import './Hero.css'
import Pic from '../assets/hero.jpeg'


import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        
        <div className='mask'>
            <img className='intro-img'
            src={Pic} alt='Hero'/>
        </div>
        
        
        <div className='content'>
            <p>Fostering Impact through.</p>
            <h1>Data-Driven Monitoring & Evaluation.</h1>
            <div>
            <Link to="/" className='btn'>Contact </Link>
        </div>
        </div>
        
        

    </div>
  )
}

export default Hero