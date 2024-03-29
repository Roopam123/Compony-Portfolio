import React, { useState, useEffect } from 'react';
import './Navbar.css'
import logo from '../../Assets/manasvi_logo.png';
import { Link } from "react-scroll";
import { GrMenu } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50); // Change 50 to your desired threshold
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handelMenu = () => {
    setIsMenu(true)
  }
  const handelCancelMenu = () => {
    setIsMenu(false)
  }
  const handelMenuBar = () => {
    setIsMenu(false)
  }
  return (
    <nav className={isScrolled ? 'nav scrolled' : 'nav'} >
      <div className="nav-left" id='nav'>
        <Link to='intro' spy={true} smooth={true}><img src={logo} alt="logo" className='ourlogo' /></Link>
      </div>
      <div className='nav-right'>
        <ul className={isMenu ? "nav-ul" : "nav-ul-responsive"}>
          <li><Link to="intro" onClick={handelMenuBar} spy={true} smooth={true}>Home</Link></li>
          <li><Link to="products" onClick={handelMenuBar} spy={true} smooth={true}>Products</Link></li>
          <li><Link to="our-services" onClick={handelMenuBar} spy={true} smooth={true}>Services</Link></li>
          <li><Link to="our-clients" onClick={handelMenuBar} spy={true} smooth={true}>Clients</Link></li>
          <li><Link to="footer" onClick={handelMenuBar} spy={true} smooth={true}><button className='contect-btn'>Contact Us</button></Link></li>
        </ul>
      </div>
      <div className='manu-icon'>
        <i className={isMenu ? "menu" : ""} onClick={handelMenu}><GrMenu /></i>
        <i className={isMenu ? "" : "cancelMenu"} onClick={handelCancelMenu}><GiCancel /></i>
      </div>
    </nav>
  )
}

export default Navbar;
