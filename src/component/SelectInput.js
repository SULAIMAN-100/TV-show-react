import React from "react";
import "./LandingPage.css";

function SelectInput({ episodes, handleSelect, select }) {
  //This is the elect input displays the list of the episodes and select one episode on change using {handleSelect} function.
  return (
    <div>
      <select className="select-input" onChange={handleSelect}>
        <option>{select}</option>
        {episodes.map((episode, i) => {
          return <option key={i}>{episode.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectInput;
