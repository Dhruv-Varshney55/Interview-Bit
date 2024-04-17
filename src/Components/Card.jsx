import React from 'react'

const Card = ({ image, title, desc, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <p className='p1'>{title}</p>
        <p className='p2'>{desc}</p>
        <p className='p3'>{price}</p>
      </div>
    </div>
  );
};

export default Card
