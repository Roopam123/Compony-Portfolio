import React,{useState,useEffect} from 'react';
import './Navbar.css'
import logo from '../../Assets/manasvi_logo.png'

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
    <nav className={isScrolled ? 'nav scrolled' : 'nav'}>
        <div className="nav-left">
            <img src={logo} alt="logo" className={isScrolled?"logo-img":""}/>
        </div>
        <div className='nav-right'>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Projects</a></li>
                <li><a href="/#">Services</a></li>
                <li><button className='contect-btn'>Contect Us</button></li>
            </ul>
        </div>    
    </nav>
  )
}

export default Navbar
