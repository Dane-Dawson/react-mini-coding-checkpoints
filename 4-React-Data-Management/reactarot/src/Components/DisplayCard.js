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
                        <p><strong>NAME:</strong> {props.cardInfo.name}</p>
                        <p><strong>TYPE:</strong> {props.cardInfo.type}</p>
                        <p><strong>VALUE:</strong> {props.cardInfo.value}</p>
                        <p><strong>MEANING:</strong> {props.cardInfo.meaning_up}</p>
                        <p><strong>DESCRIPTION:</strong> {props.cardInfo.desc}</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default DisplayCard;