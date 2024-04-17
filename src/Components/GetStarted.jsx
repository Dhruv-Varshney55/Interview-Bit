import React from 'react'
import Image from '../assets/Images/model.png';

function GetStarted() {
  return (
    <div className='getMain'>
      <div className="getLeft">
        <div className="line"></div>
        <p className='para1'>Best Quality Products</p>
        <h1>We Print What You Want!</h1>
        <p className='para2'>Capture your creativity with top-notch printing solutions tailored to your needs. Experience excellence in every detail.</p>
        <button>Get Started</button>
      </div>
      <div className="getRight">
        <img src={Image} alt="Image"/>
      </div>
    </div>
  )
}

export default GetStarted
