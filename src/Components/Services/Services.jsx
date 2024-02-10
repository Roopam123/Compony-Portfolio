import React from 'react';
import servicesImg from "../../Assets/services.png";
import './Services.css'

const Services = () => {
  return (
    <div className='services' id='our-services'>
        <div className="services-left">
            <span>Our Services</span>
            <span>Manasvi Technologies (OPC) Pvt. Ltd is at the forefront of digital innovation, offering comprehensive services in web development, digital marketing, app development, and IT services. Our team of experts is dedicated to delivering cutting-edge solutions that drive growth and efficiency for our clients. By leveraging the latest technologies and trends, we ensure your business stays ahead in the competitive digital landscape. Whether you're looking to build a dynamic website, enhance your online presence, develop a mobile app, or streamline your IT operations, Manasvi Technologies is your partner in digital excellence.</span>
            <span>
              <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>IT Services</li>
                <li>Digital Marketing</li>
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
