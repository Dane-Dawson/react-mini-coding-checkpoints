import React, { Component } from 'react';
import ForecastCard from '../Components/ForecastCard';

class ForecastContainer extends Component {

    render() {
        const pastPresFut = ["past", "present", "future"]
        return (
            <div className="forecast-container">
                {this.props.cards.map((card,index) => {
                    return <ForecastCard 
                    key={card.name_short}
                    time={pastPresFut[index]} 
                    card={card}
                    setSelected={this.props.setSelected}
                    />
                })}
            </div>
        )
    }
}

export default ForecastContainer;