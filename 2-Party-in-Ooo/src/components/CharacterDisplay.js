import React from "react";

class CharacterDisplay extends React.Component {

  render() {
    return (
      <div className="character-display-div">
        <div className="display-info-container">
          <span className="introduction-tag">Introducing:</span>

          <h1 className="display-card-name">{/* Characters full name goes here */}</h1>

          <p className="the-tag">the</p>

          <p className="display-species">{/* Character species goes here */}</p>
          <p className="display-gender">{/* Character gender/sex goes here */}</p>
          <img
            className="display-card-sprite"
            src={null /* Remove null, then character sprite image goes here */}
          />
        </div>
        <div className="display-quotes">
        <span>Known for saying</span>
        <ul >
          {/* The collection of quotes will be rendered here as <li> elements*/}
        </ul>
        </div>
      </div>
    );
  }
}

export default CharacterDisplay;