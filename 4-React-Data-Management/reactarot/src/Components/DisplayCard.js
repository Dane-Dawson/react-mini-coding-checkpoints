import React from 'react';

function DisplayCard(props) {
    return (
        <div className="display-card-wrapper">
            {props.cardInfo.name ? (
                <div className="display-card">
                    <img
                        className="display-card-img"
                        src={
                            process.env.PUBLIC_URL + `./cardImages/${props.cardInfo.name_short}.jpg`
                        }
                        alt={props.cardInfo.name_short}>
                    </img>

                    <div className="display-card-info">
                        <p>Name: {props.cardInfo.name}</p>
                        <p>Type: {props.cardInfo.type}</p>
                        <p>Meaning ReversedÎ: {props.cardInfo.meaning_rev}</p>
                        <p>Description: {props.cardInfo.desc}</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default DisplayCard;