import React from 'react';
import Servicetitle from '../Servicetitle/Servicetitle';
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="contact">
                <Servicetitle title="Contact Us" />
               
                <div className="contactcon">
                
                    <div className="form">
                        <h1>contact form</h1>
                        <div className="line"></div>
                        <form>
                            <h1>Contact Us</h1>
                            <div className="name">
                                <input type="text" placeholder='Name' required />
                                <input type="tel" placeholder='Phone' required />
                            </div>
                            <div className="email">
                                <input type="email" placeholder='Email' required />
                            </div>
                            <div className="message">
                                <textarea required placeholder="Message" cols="30" rows="10"></textarea>
                            </div>

                            <button type='Submit' >Submit</button>
                        </form>
                    </div>
                    <div className="ccard">
                        <div className="address">
                            <h1>Address</h1>
                            1604, Savanna B, Casa Bella, <br />
                            Palava City, Dombivli (East).
                        </div>
                        <div className="email">
                            <h1>Email</h1>
                            shreyasaquasolution@gmail.com
                        </div>
                        <div className="phone">
                            <h1>Phone</h1>
                            +91-9321267440 <br />
                            +91-9324910894
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact