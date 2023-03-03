import React from 'react';
import "./Footer.css";
import logo from "../../images/flogo.png";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="flogo">
          <img src={logo} alt="footer-logo" />
        </div>
        <div className="links">
          <h1>Products</h1>
          <a className='link' href="/">Water Filters</a>
          <a className='link' href="/">Water Filters</a>
          <a className='link' href="/">Water Filters</a>
          <a className='link' href="/">Water Filters</a>
          <a className='link' href="/">Water Filters</a>
        </div>
        <div className="links">
          <h1>Navigation</h1>
          <a className='link' href="/">Home</a>
          <a className='link' href="/">About</a>
          <a className='link' href="/">Product</a>
          <a className='link' href="/">Services</a>
          <a className='link' href="/">Contact</a>
        </div>
        <div className="address">
          <h1>Contact Us</h1>

          <p>1604, Savanna B, Casa Bella, <br />
            Palava City, Dombivli (East). <br />
          </p>

          <p>shreyasaquasolution@gmail.com</p>

          <div className="call">
            <IoIosCall />
            <a href="tel:+919321267440">+91-9321267440</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer