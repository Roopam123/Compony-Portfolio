import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import OurClients from './Components/OurClients/OurClients';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <Services/>
      <OurClients/>
      <Footer/>
    </div>
  )
}

export default App
