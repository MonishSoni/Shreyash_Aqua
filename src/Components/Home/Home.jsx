import React from 'react';
import "./Home.css";
import SecImg from "../../images/group.png"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="sec1">
          <div className="sec1img">
            <img src={SecImg} alt="" />
          </div>

          <div className="sec1text">
            <h1>Protect your health by drinking pure water.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home