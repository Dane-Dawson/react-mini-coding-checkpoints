import React from 'react';
import Logo from "../Assets/template-logo.png"

function TemlpateLogo() {
    return (
        <div className="template-logo-wrapper">
            <div className="dot"></div>
                <img className="template-logo" src={Logo} alt="Red Plate and Utensil Logo"></img>
            <div className="dot"></div>
        </div>
    );
}

export default TemlpateLogo;