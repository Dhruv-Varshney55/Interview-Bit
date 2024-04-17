import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/print-1.svg" alt="Logo"/>
      </div>
      <div className="right">
        <ul className="link">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </ul>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
}

export default Navbar;
