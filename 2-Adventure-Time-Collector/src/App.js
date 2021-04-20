import "./App.css";
import logo from "./images/logo.png";

import React from "react";
import CharacterDisplay from "./components/CharacterDisplay";
import CharacterCardContainer from "./components/CharacterCardContainer";

class App extends React.Component {
  state = {
    allCharacters: [],
    displayCharacter: {
      id: 0,
      slug: "finn",
      displayName: "Finn",
      fullName: "Finn Mertens",
      species: "Human",
      sex: "Male",
      quotes: [
        "You don't need a mirror to know you look good. You're beautiful on the inside.",
        "You're letting your brain dial turn your fear volume up.",
        "'Creepy' is just another label we use to distance ourselves from stuff we don't understand. Or reminds us of something in ourselves that we're not comfortable with.",
        "I wonder if being a sad loner gives you more raw materials to form song ideas. Is that where creativity comes from? From sad biz?",
        "Homies help homies. Always.",
      ],
      sprite: "https://i.imgur.com/zLEMgTB.png",
    },
  };
  // Write your code here below here! You won't need to alter any of the code in state above.

  render() {
    return (
      <div className="main-app-div">
        <img src={logo} className="logo-img"/>
        <CharacterDisplay character={this.state.displayCharacter}/>
        <CharacterCardContainer />
      </div>
    );
  }
}

export default App;
