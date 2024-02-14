import React from 'react';
import "./Card.css";
// import services from '../../Assets/services.jpg'

function Card(props) {
  const {name,description,img,url} = props
  return (
    <div className='card'>
      <div className='card-left'><img src={img} alt=""/></div>
      <div className="card-right">
      <span className='card-heading'>{name}</span>
      <span className='card-discription'>{description}</span>
      <div className='card-btn'>
        <a href="/">Video</a>
        <a href="/">Details</a>
        <a href={url} target='_blank'>Demo</a>
      </div>
      </div>
    </div>
  )
}

export default Card
