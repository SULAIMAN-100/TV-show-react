import React, { useState, useContext } from "react";
import "./LandingPage.css";
import SearchBar from "./SearchBar";
import SelectInput from "./SelectInput";
import { GetAllEpisodes } from "./GetAllEpisodes";
export default function LandingPage() {
  const { allEpisodesApi } = useContext(GetAllEpisodes);

  const [searchInput, setSearchInput] = useState([]);
  const [selectValue, setSelectValue] = useState("Select all episodes");
  const [showLessBtn, setShowLessBtn] = useState("SHOW MORE");
  const [btnValue, setBtnValue] = useState(null);
  console.log(allEpisodesApi);
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
  const handleLessBts = (text) => {
    console.log(text);
    if (showLessBtn === "SHOW MORE") {
      return text.substring(0, 150) + "...";
    } else if (showLessBtn === "SHOW LESS") {
      return text;
    }
  };
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
          filterEpisode.map((episode, index) => {
            let text = replaceTags(episode.summary);

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
                  <button
                    onClick={() =>
                      handleLessBts(episode.summary) &&
                      showLessBtn === "SHOW MORE"
                        ? setShowLessBtn("SHOW LESS")
                        : setShowLessBtn("SHOW MORE")
                    }
                  >
                    {showLessBtn}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
