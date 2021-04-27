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

  toggleBunny = () => {
    this.setState({ showBunny: !this.state.showBunny });
  };
  toggleKnife = () => {
    this.setState({ knifeThrown: !this.state.knifeThrown });
  };
  toggleVolunteer = () => {
    this.setState({ volunteerSelected: !this.state.volunteerSelected });
  };
  resetKnifeIllusion = () => {
    this.setState({
      knifeThrown: false,
      volunteerSelected: false,
    });
  };
  render() {
    return (
      <div className="app-main-div">
        <div className="app-stage">
          <img src={showSign} className="magic-show-sign" alt="stage sign" />
          <img src={melvinHimself} className="melvin-himself" alt="Melvin" />

          <div className="app-bunny-trick">
            {/* This is where the bunny toggle will go */}
            <img
              src={this.state.showBunny ? bunny : hat}
              alt="bunny"
              className="bunny-trick"
            />
            <button className="alakazam" onClick={this.toggleBunny}>
              Alakazam!
            </button>
          </div>
          <IllusionControls
            resetTrick={this.resetKnifeIllusion}
            toggleKnife={this.toggleKnife}
            toggleVolunteer={this.toggleVolunteer}
            knife={this.state.knifeThrown}
            volunteer={this.state.volunteerSelected}
          />
          <KnifeIllusion
            knife={this.state.knifeThrown}
            volunteer={this.state.volunteerSelected}
          />
        </div>
      </div>
    );
  }
}

export default App;
