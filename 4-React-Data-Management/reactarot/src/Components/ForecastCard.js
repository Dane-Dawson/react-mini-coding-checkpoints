import React, { Component } from 'react';

class ForecastCard extends Component {
    
    render() {
        return (
            <div className="forecast-card-wrapper">
                <h1>{this.props.time}</h1>
                <div className="forecast-card" onClick={() => {this.props.setSelected(this.props.card)}}>
                    <img
                        className="forecast-card-img"
                        src={process.env.PUBLIC_URL + `./cardImages/${this.props.card.name_short}.jpg`}
                        alt={`${this.props.card.name}`}>
                    </img>
                    <h3>- {this.props.card.name} -</h3>
                </div>
            </div>
        )
    }
}
export default ForecastCard;