import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import OurClients from './Components/OurClients/OurClients';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import CopyRight from './Components/CopyRight/CopyRight';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <Products/>
      <Services/>
      <OurClients/>
      <About/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}

export default App
