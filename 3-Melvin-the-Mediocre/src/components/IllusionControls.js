import React from "react";

function IllusionControls(props) {
  return (
    <div className="illusion-controls-main-div">
      <button
        className="find-volunteer"
        onClick={props.volunteer ? null : props.toggleVolunteer}
      >
        {props.volunteer ? "Volunteer chosen" : "Pick a volunteer"}
      </button>


      <button
        className="throw-knife"
        onClick={props.knife ? null : props.toggleKnife}
      >
        {props.knife ? "Knife thrown" : "Throw knife"}
      </button>


      <button className="reset" onClick={props.resetTrick}>
        Reset illusion
      </button>

    </div>
  );
}

export default IllusionControls;
