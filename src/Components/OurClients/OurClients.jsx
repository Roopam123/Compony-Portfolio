import React from 'react';
import './OurClients.css';
import clients from '../../Assets/Clients.png';

const OurClients = () => {
  return (
    <div className='clients' id='our-clients'>
      <div className="services-right">
        <img className='services-img-client' src={clients} alt="" />
      </div>
      <div className="services-left">
        <span>Our Clients</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem aliquam, dolorum suscipit inventore placeat ipsum iure libero sit commodi a officia recusandae quasi vitae? Obcaecati dignissimos libero accusamus autem.</span>
        <span>
          <ul>
            <li>Lorem ipsum, dolor sit amet</li>
            <li>Lorem ipsum, dolor sit amet</li>
            <li>Lorem ipsum, dolor sit amet</li>
            <li>Lorem ipsum, dolor sit amet</li>
            <li>Lorem ipsum, dolor sit amet</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default OurClients
