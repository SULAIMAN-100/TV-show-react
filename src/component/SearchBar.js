import React from "react";
import "./LandingPage.css";
export default function SearrchBar({
  searchValue,
  allEpisodes,
  filterEpisode,
  placeholder,
}) {
  return (
    //get the value and search on change using {searchValue} function,
    // then display the number of epidoes on the search out of the totals number.
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder={placeholder}
        onChange={searchValue}
      />

      <p>
        Display:{filterEpisode.length} / {allEpisodes.length} episode(s)
      </p>
    </div>
  );
}
