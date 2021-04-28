import React from "react";
import "./App.css";

//images imported locally
import showSign from "./images/magic-show-sign.png";
import melvinHimself from "./images/melvin.png";
import bunny from "./images/unamused-bunny.png";
import hat from "./images/hat-and-wand.png";

//components imported
import KnifeIllusion from "./components/KnifeIllusion";
import IllusionControls from "./components/IllusionControls";

class App extends React.Component {
  state = {
    showBunny: false,
    knifeThrown: false,
    volunteerSelected: false,
  };
  // Write your code here below here! You won't need to alter any of the code in state above.

  render() {
    return (
      <div className="app-main-div">
        <div className="app-stage">
          <img src={showSign} className="magic-show-sign" alt="stage sign" />
          <img src={melvinHimself} className="melvin-himself" alt="Melvin" />

          <div className="app-bunny-trick">
            <img
              src={/* Your conditional will go here */ hat}
              alt="bunny"
              className="bunny-trick"
            />
            <button
              className="alakazam"
              onClick={null /* toggleBunny goes here */}
            >
              Alakazam!
            </button>
          </div>
          <IllusionControls />
          <KnifeIllusion />
        </div>
      </div>
    );
  }
}

export default App;
