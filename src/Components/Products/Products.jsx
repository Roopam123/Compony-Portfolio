import React from 'react';
import "./Products.css";
import Card from '../Card/Card';
import produtsData from '../../productsdata'

const Products = () => {
  return (
    <div className='our-products'>
      <div className="products-top">
        <span>Our Products</span>
      </div>
      <div className="products-bottom">
        {produtsData.map((item,index)=>(
          <Card key={index} 
          name={item.name} 
          description={item.discription}
          img={item.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
