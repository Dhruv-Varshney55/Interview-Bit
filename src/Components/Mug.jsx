import React from 'react'
import Card from './Card';
import image1 from '../assets/Images/mug-blue.jpg';
import image2 from '../assets/Images/mug-coffee.jpg';
import image3 from '../assets/Images/mug-white.jpg';
import image4 from '../assets/Images/mug-yellow.jpg';

function Mug() {
  return (
    <div className="mug-cards">
      <h1>Our Featured Products</h1>
      <div className='line2'></div>
      <div className="card-container">
        <Card
          image={image1}
          title="Mugs"
          desc="Black printed coffee mug"
          price="Rs. 150"
        />
        <Card
          image={image2}
          title="Mugs"
          desc="Father's day coffee mug"
          price="Rs. 200"
        />
        <Card
          image={image3}
          title="Mugs"
          desc="Personalized coffee mug"
          price="Rs. 170"
        />
        <Card
          image={image4}
          title="Mugs"
          desc="Valentine's day coffee mug"
          price="Rs. 190"
        />
      </div>
    </div>
  )
}

export default Mug;