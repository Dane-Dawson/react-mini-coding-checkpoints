import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons-wrapper">
            <button onClick={props.shuffle}>Shuffle</button>
            <button onClick={props.flip}>Flip All</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
}

export default Buttons;