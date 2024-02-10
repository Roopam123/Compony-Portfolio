import React from 'react';
import Linkdin from "../../Assets/linkdin.png";
import Instagram from '../../Assets/insta.png';
import x from '../../Assets/x.png';
import facebook from '../../Assets/fb.png';
import './Footer.css'
import logo from '../../Assets/manasvi_logo.png'


const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer'>
                <div className="company-name">
                    <span><a href="https://manasvitech.in/" target='_blank' rel="noreferrer"><img src={logo} alt="logo" className='c-logo' /></a></span>
                    <span>"At Manasvi Technologies(OPC) Pvt. Ltd, we make phone apps that are just right for you. Tell us what you need!"</span>
                </div>
                <div className='products'>
                    <span>Products</span>
                    <span>
                        <ul>
                            <li>Software Development</li>
                            <li>App Development</li>
                            <li>IT Services</li>
                            <li>E-Commerce</li>
                        </ul>
                    </span>
                </div>
                <div className="links">
                    <span>Social Media</span>
                    <span>
                        <ul>
                            <li>
                                <img src={facebook} alt="FaceBook" />
                                <a href="https://www.facebook.com/people/Manasvi-Technologies-OPC-Pvt-Ltd/61555158365754/" target='_blank' rel="noreferrer">Fackebook</a>
                            </li>

                            <li>
                                <img src={x} alt="YouTube" /> 
                                <a href="https://twitter.com/manasvitech01" target='_blank' rel="noreferrer">Twitter X</a> 
                            </li>
                            <li>
                                <img src={Instagram} alt="Insta" /> 
                                <a target='_blank' href="https://www.instagram.com/manasvi.technologies?igshid=NTc4MTIwNjQ2YQ%3D%3D" rel="noreferrer">Instagram</a> 
                            </li>
                            <li>
                                <img src={Linkdin} alt="" /> <a href="https://www.linkedin.com/in/manasvi-technologies-7aa426262/" target='_blank' rel="noreferrer">Linkdin</a>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="address">
                    <span>Contact Us</span>
                    <span>Gate -2, Raj Business Park -3, office 84/85, JK Rd, Minal Residency, Bhopal, Madhya Pradesh 462023</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
