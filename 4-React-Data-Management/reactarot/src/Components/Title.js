import React from 'react';
import ReacTaroLogo from '../images/reactarot-logo.png';

function Title() {
    return (
        <div className="logo-container">
            <img className="logo" src={ReacTaroLogo} alt="React Tarot Logo"></img>
        </div>
    );
}

export default Title;