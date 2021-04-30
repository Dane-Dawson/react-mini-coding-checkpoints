import React, { Component } from 'react';
import Table from '../Components/Table'
import CardContainer from './CardContainer';
import DisplayConsole from './DisplayConsole';
import ForecastContainer from './ForecastContainer';

class ReacTarot extends Component {
    constructor() {
        super()
        this.state = {
            deck: [],
            presentedCards: [],
            threeChosenCards: [],
            selectedCard: {},
            flipped: false,
            shuffling: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/cards")
            .then(resp => resp.json())
            .then(data => this.setState({
                deck: [...data],
                presentedCards: [...data]
            }))
    }

    handleSetSelected = (cardInfo) => {
        let newSelectedCards = this.state.threeChosenCards;
        if (this.state.threeChosenCards.length < 3 && this.state.threeChosenCards.indexOf(cardInfo) === -1) {
            newSelectedCards.push(cardInfo)
        }

        this.setState({
            threeChosenCards: [...newSelectedCards],
            selectedCard: { ...cardInfo }
        })
    }

    handleSortCards = (selection) => {
        let newPresentedCards;
        switch (selection) {
            case "":
                newPresentedCards = this.state.deck;
                break;
            case "value":
                newPresentedCards = [...this.state.presentedCards].sort((card1, card2) => card1.value > card2.value ? 1 : -1)
                break;
            case "name":
                newPresentedCards = [...this.state.presentedCards].sort((card1, card2) => card1.name > card2.name ? 1 : -1)
                break;
            case "type":
                newPresentedCards = [...this.state.presentedCards].sort((card1, card2) => card1.type > card2.type ? 1 : -1)
                break;
            default:
                break;
        }
        this.setState({
            presentedCards: newPresentedCards
        })
    }

    handleFilterCards = (filter) => {
        let filteredCards;
        let cards = [...this.state.deck];
        switch (filter) {
            case "all":
                filteredCards = cards;
                break;
            case "major":
                filteredCards = cards.filter(card => card.type === 'major');
                break;
            case "minor":
                filteredCards = cards.filter(card => card.type === 'minor');
                break;
            case "wands":
                filteredCards = cards.filter(card => card.suit === 'wands');
                break;
            case "cups":
                filteredCards = cards.filter(card => card.suit === 'cups');
                break;
            case "pentacles":
                filteredCards = cards.filter(card => card.suit === 'pentacles');
                break;
            case "swords":
                filteredCards = cards.filter(card => card.suit === 'swords');
                break;
            default:
                break;
        }
        this.setState({
            presentedCards: filteredCards
        })

    }


    handleShuffleCards = () => {
        let cards = [...this.state.presentedCards].sort(() => Math.random() - .5)
        this.setState({ shuffling: true }, () => {
            setTimeout(() => {
                this.setState({
                    presentedCards: cards,
                    shuffling: false
                })
            }, 600)
        })
    }

    handleFlipCards = () => {
        this.setState({
            flipped: !this.state.flipped
        })
    }

    handleReset = () => {
        this.setState({
            presentedCards: [...this.state.deck],
            threeChosenCards: [],
            selectedCard: {},
            flipped: false
        })
    }

    render() {
        return (
            <div className="ReacTarot">
                <DisplayConsole
                    selectedCard={this.state.selectedCard}
                    flipped={this.state.flipped}
                    shuffle={this.handleShuffleCards}
                    flip={this.handleFlipCards}
                    sort={this.handleSortCards}
                    filter={this.handleFilterCards}
                    reset={this.handleReset}
                />
                <Table />
                <CardContainer
                    shuffling={this.state.shuffling}
                    cards={this.state.presentedCards}
                    flipped={this.state.flipped}
                    setSelected={this.handleSetSelected}
                />
                <ForecastContainer
                    cards={this.state.threeChosenCards}
                    setSelected={this.handleSetSelected}
                />
            </div>
        )
    }
}
export default ReacTarot;