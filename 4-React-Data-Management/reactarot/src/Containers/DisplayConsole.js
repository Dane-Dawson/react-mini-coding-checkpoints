import React, { Component } from 'react';
import DisplayCard from '../Components/DisplayCard'
import Shuffle from '../Components/Shuffle';
import SortFilter from '../Components/SortFilter';

class DisplayConsole extends Component {
    render() {
        return (
            <div className="display-console-wrapper">
                    <DisplayCard cardInfo={this.props.selectedCard} />
                <SortFilter
                    sortCards={this.props.sort}
                    filterCards={this.props.filter}
                />
                <Shuffle shuffle={this.props.shuffle} />
            </div>
        )
    }
}
export default DisplayConsole;