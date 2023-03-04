import React from 'react';
import "./About.css"
import Servicetitle from '../Servicetitle/Servicetitle';
import aimg from "../../images/modern.png";
import Button from "../Button/Button"

const About = () => {
    return (
        <>
            <div className="about">
                <Servicetitle title="About Us" />
                <div className="acon">
                    <div className="aimg">
                        <img src={aimg} alt="" />
                    </div>
                    <div className="atext">
                        <p>
                            Welcome to Shreyas Aqua Solution, your one-stop-shop for all your water filtration needs! We are a dedicated team of professionals who believe in providing high-quality water filtration solutions to our valued customers.

                        </p>
                        <p>
                            At Shreyas Aqua Solution, we understand the importance of having access to clean and safe drinking water. That's why we offer a wide range of water filtration solutions to cater to the diverse needs of our customers. Our team of experts has years of experience in the water filtration industry and is committed to delivering exceptional services to our customers.

                        </p>
                        <p>
                            We take pride in providing personalized solutions to our customers, and our team works closely with them to understand their specific requirements. We offer a range of water filtration products, including RO systems, UV systems, water softeners, and more. Our products are sourced from the most reliable and trusted manufacturers to ensure the highest quality and performance.

                        </p>
                        <p>
                            We believe in building long-term relationships with our customers, and that's why we offer comprehensive after-sales support. Our team is always available to assist our customers with any queries or concerns they may have.

                        </p>
                        <p>
                            At Shreyas Aqua Solution, we are passionate about providing high-quality water filtration solutions to our customers. Our commitment to excellence and customer satisfaction is reflected in everything we do. So, whether you are a homeowner, a business owner, or an industry professional, we have the perfect water filtration solution for you. Contact us today to learn more about our products and services!

                        </p>

                        <Button className="abtn" data="Book a Request" />


                    </div>
                </div>



            </div>
        </>
    )
}

export default About