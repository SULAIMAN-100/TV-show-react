import React from 'react'


export default function SearrchBar({ searchValue, allEpisodes, filterEpisode }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search for episode"
        onChange={searchValue}
      /> 
      <p>Display:{filterEpisode.length} / {allEpisodes.length}   episodes</p>
    </div>
  );
}
