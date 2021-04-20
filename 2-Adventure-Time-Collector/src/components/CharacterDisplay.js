import React from "react";

class CharacterDisplay extends React.Component {

  render() {
    return (
      <div>
      Character Display
      <img src="props" />
      <h1>Name</h1>
      <h3>Species</h3>
      <h3>Gender</h3>
      <p>Famous quotes:</p>
      <ul>
          Quotes
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