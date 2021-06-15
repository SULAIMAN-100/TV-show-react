import React from "react";

function SelectInput({ episodes, handleSelect, select }) {
  return (
    <div>
      <select onChange={handleSelect}>
        <option>{select}</option>
        {episodes.map((episode, i) => {
          return <option key={i}>{episode.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectInput;
