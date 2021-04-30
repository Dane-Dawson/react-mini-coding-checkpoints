import React, { Component } from 'react';
import DisplayCard from '../Components/DisplayCard'
import Buttons from '../Components/Buttons';
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
                <Buttons
                    shuffle={this.props.shuffle}
                    flip={this.props.flip}
                    reset={this.props.reset}
                />
            </div>
        )
    }
}
export default DisplayConsole;