import React from 'react';
import servicesImg from "../../Assets/services.png";
import './Services.css'

const Services = () => {
  return (
    <div className='services' id='our-services'>
        <div className="services-left">
            <span>Our Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem aliquam, dolorum suscipit inventore placeat ipsum iure libero sit commodi a officia recusandae quasi vitae? Obcaecati dignissimos libero accusamus autem.</span>
            <span>
              <ul>
                <li>Web Development</li>
                <li>Web Development</li>
                <li>Web Development</li>
                <li>Web Development</li>
                <li>Web Development</li>
              </ul>
            </span>
        </div>
        <div className="services-right">
            <img className='services-img' src={servicesImg} alt="" />
        </div>
    </div>
  )
}

export default Services
