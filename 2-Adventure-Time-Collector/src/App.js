import './App.css';
import logo from "./images/logo.png"

import React from "react";
import CharacterDisplay from "./components/CharacterDisplay"
import CharacterCardContainer from "./components/CharacterCardContainer"

class App extends React.Component {
  state = {
    allCharacters: [],
    displayCharacter: {}
  }
  // Write your code here below here! You won't need to alter any of the code in state above.

  render() {
    return (
      <div>
      <img src={logo}/>
      Main App
     <CharacterDisplay />
      </div>
    );
  }
}

export default App;
