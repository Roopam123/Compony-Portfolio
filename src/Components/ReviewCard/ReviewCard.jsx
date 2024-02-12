import React from 'react';
import star from '../../Assets/star.png';
import "./ReviewCard.css"
import { motion } from "framer-motion"

const ReviewCard = (props) => {
    const { name, img, rating } = props;

    const stars = [];
    for (let index = 0; index < rating; index++) {
        stars.push(<img className='star-img' key={index} src={star} alt="star" />);
    }

    return (
        <motion.div className='review-card-new' animate={{ x: 10,y:10 }}>
            <div className='review-card-top'><img src={img} alt="" /></div>
            <div className='review-card-bottom'>
                <span>{name}</span>
                <span>{stars}</span>
            </div>
        </motion.div>
    );
}

export default ReviewCard;
