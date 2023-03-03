import React from 'react';
import "./Servicecard.css";


const Servicecard = ({title,feature1,feature2,feature3,feature4}) => {
    return (
        <>
            <div className="scard">
                <div className="cardtitle">
                    <h1>{title}</h1>
                </div>
                <div className="features">
                    <li>{feature1}</li>
                    <li>{feature2}</li>
                    <li>{feature3}</li>
                    <li>{feature4}</li>
                </div>

            </div>
        </>
    )
}

export default Servicecard