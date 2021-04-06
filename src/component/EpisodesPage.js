import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import SearchBar from "./SearchBar";
import SelectInput from "./SelectInput";
import { useParams } from "react-router-dom";

import ShowMoreText from "react-show-more-text";
export default function EpisodesPage() {
  const { id } = useParams();
  console.log(id);

  const [searchInput, setSearchInput] = useState([]);
  const [selectValue, setSelectValue] = useState("Select all episodes");

  const [allEpisodesApi, setAllEpisodesApi] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then((data) => data.json())
      .then((data) => setAllEpisodesApi(data));
  }, [id]);

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
      <div className="card-navbar">
        <a href="/">
          <button>BACK TO SHOWS</button>
        </a>

        <SearchBar
          searchValue={searchValue}
          filterEpisode={filterEpisode}
          allEpisodes={allEpisodesApi}
        />
        <SelectInput episodes={allEpisodesApi} handleSelect={handleSelect} />
      </div>

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
