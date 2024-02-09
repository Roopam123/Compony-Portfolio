import React,{useState,useEffect} from 'react';
import './Navbar.css'
import logo from '../../Assets/manasvi_logo.png';
import { Link } from "react-scroll";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50); // Change 50 to your desired threshold
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={isScrolled ? 'nav scrolled' : 'nav'} >
        <div className="nav-left" id='nav'>
          <Link to='intro' spy={true} smooth={true}><img src={logo} alt="logo" className='ourlogo'/></Link>
        </div>
        <div className='nav-right'>
            <ul>
                <li><Link to="intro" spy={true} smooth={true}>Home</Link></li>
                <li><Link to="products" spy={true} smooth={true}>Products</Link></li>
                <li><Link to="our-services" spy={true} smooth={true}>Services</Link></li>
                <li><Link to="our-clients" spy={true} smooth={true}>Clients</Link></li>
                <li><Link to="footer" spy={true} smooth={true}><button className='contect-btn'>Contect Us</button></Link></li>
            </ul>
        </div>    
    </nav>
  )
}

export default Navbar
