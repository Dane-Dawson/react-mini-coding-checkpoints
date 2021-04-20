import React from "react";

class CharacterDisplay extends React.Component {
  renderQuotes = (quotes) => {
    return quotes.map((quote) => {
      <li>{quote}</li>;
    });
  };

  render() {
    return (
      <div className="character-display-div">
        <img
          className="display-card-sprite"
          src={this.props.character.sprite}
        />
        <p className="introduction-tag">Introducing:</p>

        <h1 className="display-card-name">{this.props.character.fullName}</h1>

        <p className="the-tag">the</p>

        <h3 className="display-species">{this.props.character.species}</h3>
        <h3 className="display-gender">{this.props.character.sex}</h3>
        <p>Famous quotes:</p>
        <ul>
          {this.props.character.quotes.map((quote) => (
            <li>{quote}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CharacterDisplay;

// {
//     "id": 6,
//     "slug": "lsp",
//     "displayName": "LSP",
//     "fullName": "Lumpy Space Princess",
//     "species": "Lumpy Space Person",
//     "sex": "Female",
//     "quotes": [
//         "WHATEVER, IT'S 2009!",
//         "I know I mess things up sometimes, but I'm really trying!",
//         "I'm doing so awesome on my own. Like, right now, I found this can of beans.",
//         "Oh nah. I am not getting eaten by zombies tonight."
//     ],
//     "sprite": "https://i.imgur.com/2LNeGHR.png"
// }
