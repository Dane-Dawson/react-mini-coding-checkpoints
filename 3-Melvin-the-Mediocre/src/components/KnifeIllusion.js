import React from "react";

//image imports
import ReadyBuster from "../images/buster-ready.png"
import UhOhBuster from "../images/buster-less-ready.png"

import ThrowingMachete from "../images/throwing-machete.png"
import Nothing from "../images/nothing.png"

import VolunteerStand from "../images/volunteer-box.png"

class KnifeIllusion extends React.Component {

  render() {
    return (
      <div className="knife-illusion-main-div">

        <img src={/* This is the volunteer image */ Nothing} className="brave-volunteer" />
        <img src={/* This is the knife image */ Nothing} className="throwing-machete" />
        
        <img src={VolunteerStand} className="volunteer-stand" />

      </div>
    );
  }
}

export default KnifeIllusion;