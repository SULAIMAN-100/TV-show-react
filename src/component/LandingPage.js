import React, { useState } from "react";
import allEpisodes from "./episodes";
import "./LandingPage.css";
import SearchBar from "./SearchBar";
import SelectInput from "./SelectInput";
export default function LandingPage() {
  const [searchInput, setSearchInput] = useState([]);
  const [selectValue, setSelectValue] = useState("Select all episodes");
  const searchValue = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };
  let filterEpisode = allEpisodes.allEpisodes.filter((item) =>
    selectValue === "Select all episodes" || searchInput.length > 0
      ? item.name.toLowerCase().indexOf(searchInput) !== -1 ||
        item.summary.toLowerCase().includes(searchInput)
      : item.name === selectValue
  );
  const seasonNumbers = (episode) => {
    if (episode.season < 10 && episode.number < 10) {
      return ` - S0${episode.season}E0${episode.number}`;
    } else {
      return ` - S0${episode.season}E${episode.number}`;
    }
  };

  /////// Select input handling
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
    setSearchInput([]);
  };

  const replaceTags = (text) => {
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <>
      <SearchBar
        searchValue={searchValue}
        filterEpisode={filterEpisode}
        allEpisodes={allEpisodes.allEpisodes}
      />
      <SelectInput
        episodes={allEpisodes.allEpisodes}
        handleSelect={handleSelect}
      />
      <div className="episodes-container">
        {allEpisodes &&
          filterEpisode.map((episode, index) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={index}>
                <h5 className="card-title">
                  {episode.name + seasonNumbers(episode)}
                </h5>

                <img
                  src={episode.image.original}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text" id="text">
                    {replaceTags(episode.summary)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
