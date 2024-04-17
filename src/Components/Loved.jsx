import React from 'react'
import image1 from '../assets/Images/tshirt1.jpg';
import image2 from '../assets/Images/tshirt2.jpg';
import image3 from '../assets/Images/tshirt3.jpg';
import image4 from '../assets/Images/tshirt4.jpg';
import Card from './Card';

function Loved() {
  return (
    <div className="loved-cards">
      <h1>Most Loved Products</h1>
      <div className='line2'></div>
      <div className="card-container">
        <Card
          image={image1}
          title="Tshirts"
          desc="Green Printed Tshirt"
          price="Rs. 400"
        />
        <Card
          image={image2}
          title="Tshirts"
          desc="Printed Brown Tshirt"
          price="Rs. 450"
        />
        <Card
          image={image3}
          title="Tshirts"
          desc="Printed Blue Tshirt"
          price="Rs. 380"
        />
        <Card
          image={image4}
          title="Tshirts"
          desc="Printed Green Tshirt"
          price="Rs. 450"
        />
      </div>
    </div>
  )
}

export default Loved;