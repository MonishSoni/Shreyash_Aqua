import React from 'react';
import "./Copyright.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Copyright = () => {
    return (
        <>
            <div className="copyright">
                <div className="sec1">
                    <p> <span>ShreyashAqua</span> © {new Date().getFullYear()}. All rights reserved.</p>
                    <p><span>Developed By</span> - <a target={'_blank'} href="https://www.linkedin.com/in/monishsoni27/">Monish Soni</a> </p>
                </div>

                <div className="sec2">
                    <p><span>Stay in touch!</span></p>
                    <div className="icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Copyright