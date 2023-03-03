import React from 'react';
import Button from '../Button/Button';
import './Navbar.css';
import logo from '../../images/logo.png';
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navlinks">
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">About</a>
                    <a href="#" className="link">Products</a>
                    <a href="#" className="link">Services</a>
                    <a href="#" className="link">Contact</a>
                </div>

                <div className="call">
                    <IoIosCall />
                    <a href="tel:+919321267440">+91-9321267440</a>
                </div>
                <div className="button">
                    <Button data="Send a Request" link="#" />

                </div>
            </div>
        </>
    )
}

export default Navbar;