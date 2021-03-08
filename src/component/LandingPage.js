import React, { useState, useContext } from "react";
import "./LandingPage.css";
import SearchBar from "./SearchBar";
import SelectInput from "./SelectInput";
import { GetAllEpisodes } from "./GetAllEpisodes";
import ShowMoreText from "react-show-more-text";
export default function LandingPage() {
  const { allEpisodesApi } = useContext(GetAllEpisodes);

  const [searchInput, setSearchInput] = useState([]);
  const [selectValue, setSelectValue] = useState("Select all episodes");
  const [showLessBtn, setShowLessBtn] = useState("SHOW MORE");

  const searchValue = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };
  let filterEpisode = allEpisodesApi.filter((item) =>
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

  //// Show less and more text

  const replaceTags = (text) => {
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <>
      <SearchBar
        searchValue={searchValue}
        filterEpisode={filterEpisode}
        allEpisodes={allEpisodesApi}
      />
      <SelectInput episodes={allEpisodesApi} handleSelect={handleSelect} />
      <div className="episodes-container">
        {allEpisodesApi &&
          filterEpisode.map((episode, index, e) => {
            console.log();

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
                  <ShowMoreText
                    /* Default options */
                    lines={5}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    onClick={(e) => e.executeOnClick}
                    expanded={false}
                  >
                    {replaceTags(episode.summary)}
                  </ShowMoreText>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
