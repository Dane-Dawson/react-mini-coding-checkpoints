import React from "react";

function IllusionControls(props) {
  return (
    <div className="illusion-controls-main-div">
      <button
        className="find-volunteer"
        onClick={null /* You'll want something here */}
      >
        Pick a volunteer
      </button>


      <button
        className="throw-knife"
        onClick={null /* You'll want something here */ }
      >
        Throw knife
      </button>


      <button className="reset" onClick={null /* You'll want something here for bonus goals */}>
        Reset illusion
      </button>

    </div>
  );
}

export default IllusionControls;
