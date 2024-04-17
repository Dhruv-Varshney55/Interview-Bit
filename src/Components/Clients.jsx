import React from 'react';
import Rating from '@mui/material/Rating';
import image1 from "../assets/Images/girl1.jpg";
import image2 from "../assets/Images/boy2.avif";
import image3 from "../assets/Images/girl3.webp";

function Clients() {
  return (
    <div className="client-cards">
      <h1>Our Happy Clients!</h1>
      <div className='line3'></div>
      <div className='card-cont'>
        <Card
          image={image1}
          title="Mugs"
          desc="Easy to use, lots of choices, prints look great, quick delivery"
          name={"Diana Burnwood"}
          rating={4.5}
        />
        <Card
          image={image2}
          title="Mugs"
          desc="Simple website, can do a lot, prints are top quality, customer service is excellent."
          price="Rs. 200"
          name={'Erick Wood'}
          rating={5}
        />
        <Card
          image={image3}
          title="Mugs"
          desc="Website interaction is easy, prints are good, customer service is helpful."
          price="Rs. 170"
          name={"Lily Granger"}
          rating={4}
        />
      </div>
    </div>
  )
}

const Card = ({ image, name, desc, rating }) => {
  return (
    <div className='cardss'>
      <div className='card-descr'>{desc}</div>
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly style={{color: 'red', margin: '30px 0px'}} />
      <div className='card-name'>
        <div className='card-image'>
          <img src={image} alt="img"/>
        </div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Clients;
