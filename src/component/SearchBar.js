import React from "react";
import "./LandingPage.css";
export default function SearrchBar({
  searchValue,
  allEpisodes,
  filterEpisode,
  placeholder,
}) {
  return (
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
