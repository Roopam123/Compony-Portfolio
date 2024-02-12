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
        <span>Client Reviews</span>
        <span>Crafting the perfect content for the client reviews section of Manasvi Technologies (OPC) Pvt. Ltd.'s company portfolio requires a nuanced approach that highlights the company's commitment to innovation, customer satisfaction, and technical excellence. Below is a meticulously designed draft that encapsulates the ethos and achievements of Manasvi Technologies through the lens of its most valuable asset—its clients.</span>
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
