import React from "react";

function SelectInput({ episodes, handleSelect }) {
  return (
    <div>
      <select onChange={handleSelect}>
        <option>Select an episode</option>
        {episodes.map((episode, i) => {
          return <option key={i}>{episode.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectInput;
