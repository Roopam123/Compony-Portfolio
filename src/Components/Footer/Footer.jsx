import React from 'react';
import Linkdin from "../../Assets/linkdin.png";
import Instagram from '../../Assets/insta.png';
import YouTube from '../../Assets/youtube.ico';
import facebook from '../../Assets/fb.png';
import './Footer.css'
import logo from '../../Assets/manasvi_logo.png'


const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className="company-name">
                    <span><img src={logo} alt="logo" className='c-logo'/></span>                    
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
                            <li><img src={facebook} alt="" />  <a href="/">Fackebook</a> </li>
                            <li><img src={YouTube} alt="" /> <a href="/">YouTube</a> </li>
                            <li><img src={Instagram} alt="" /> <a href="/">Instagram</a> </li>
                            <li><img src={Linkdin} alt="" /> <a href="/">Linkdin</a> </li>
                        </ul>
                    </span>
                </div>
                <div className="address">
                    <span>Address</span>
                    <span>Gate -2, Raj Business Park -3, office 84/85, JK Rd, Minal Residency, Bhopal, Madhya Pradesh 462023</span>
                </div>
            </div>
            <div className='footer-buttom'>

            </div>
        </footer>       
    )
}

export default Footer
