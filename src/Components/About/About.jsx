import React from 'react';
import './About.css';
import aboutus from '../../Assets/about.png'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={aboutus} alt="" />
        </div>
        <div className='about-right'>
            <span>About Us</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit excepturi odio, vel sunt illum, laborum vitae id facere fuga similique repellat minima. Nesciunt dolore architecto suscipit, tenetur saepe quasi!</span>
        </div>
    </div>
  )
}

export default About
