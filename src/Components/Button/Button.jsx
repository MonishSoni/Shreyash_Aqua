import React from 'react';
import "./Button.css"

const Button = ({ data, link }) => {
    return (
        <>
            <a className='BtnPrimary' href={link}>{data}</a>
        </>
    )
}

export default Button