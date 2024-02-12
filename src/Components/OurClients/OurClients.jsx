import React from 'react';
import './OurClients.css';
import clients from '../../Assets/Clients.png';
import ClientReviewsDetails from '../../reviews.js';
import ReviewCard from '../ReviewCard/ReviewCard.jsx';

const OurClients = () => {
  return (
    <div className='clients' id='our-clients'>
      <div className="services-right">
        <img className='services-img-client' src={clients} alt="" />
      </div>
      <div className="services-left">
        <span>Our Clients</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem aliquam, dolorum suscipit inventore placeat ipsum iure libero sit commodi a officia recusandae quasi vitae? Obcaecati dignissimos libero accusamus autem.</span>
        <span className='review-card'>
          {ClientReviewsDetails.map((ele,index)=>(
            <ReviewCard key={index} name={ele.name} img={ele.img} rating={ele.rating}/>
          ))}
        </span>
        </div>
      </div>
  )
}

export default OurClients
