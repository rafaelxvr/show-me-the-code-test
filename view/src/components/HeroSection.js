import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='videos/video-2.mp4'
        autoPlay loop muted />
        <h1>LIBERDADE É FALAR ILIMITADO</h1>
        <p>O que você está esperando?</p>
        <div className="hero-btns">
          <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
              ASSINE JÁ!
          </Button>

          <Button 
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
              VEJA OS BENEFÍCIOS! <i className='far fa-play-circle'></i>
          </Button>
        </div>
    </div>
  )
}

export default HeroSection