import React from "react";

export default function SearrchBar({
  searchValue,
  allEpisodes,
  filterEpisode,
  placeholder,
}) {
  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={searchValue} />
      <p>
        Display:{filterEpisode.length} / {allEpisodes.length} episodes
      </p>
    </div>
  );
}
