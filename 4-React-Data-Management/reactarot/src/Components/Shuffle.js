import React from 'react';

function Shuffle(props) {
    return (
        <div className="shuffle-button-wrapper">
            <button className="shuffle-button" onClick={props.shuffle}>Shuffle</button> 
        </div>
    );
}

export default Shuffle;