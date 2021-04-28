import React from "react";

import CharacterCard from "./CharacterCard"

function CharacterCardContainer(props){

    return (
        <div className="character-card-container-div">
        <div className="lengthy-description">
            <div className="welcome-tag">
                Welcome to the party!
            </div>
        </div>
      <div className="sprite-grid">
      {/* This is where you will iterate through all the characters to make a CharacterCard for each one */}
      </div>

        </div>
    );
}

export default CharacterCardContainer;
