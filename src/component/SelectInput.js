import React from "react";
import "./LandingPage.css";

function SelectInput({ episodes, handleSelect, select }) {
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
