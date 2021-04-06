import React, { useState } from "react";
import "./DisplayAllShows.css";
import { allShows } from "./Shows";
import SearchBar from "./SearchBar";
import SelectInput from "./SelectInput";
import ShowMoreText from "react-show-more-text";
import { useHistory } from "react-router-dom";
export default function DisplayAllShows() {
  const [searchInput, setSearchInput] = useState([]);
  const [selectValue, setSelectValue] = useState("Select all shows");
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/episodes/${id}`);
    console.log(id);
  };
  const searchValue = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };
  let filterShows = allShows.filter((item) =>
    selectValue === "Select all shows" || searchInput.length > 0
      ? item.name.toLowerCase().indexOf(searchInput) !== -1 ||
        item.summary.toLowerCase().includes(searchInput) ||
        item.genres.toLowerCase().includes(searchInput)
      : item.name === selectValue
  );
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
    setSearchInput([]);
  };
  const replaceTags = (text) => {
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      <div className="card-navbar">
        <SearchBar
          searchValue={searchValue}
          filterEpisode={filterShows}
          allEpisodes={allShows}
        />
        <SelectInput episodes={allShows} handleSelect={handleSelect} />
      </div>

      <div className="shows-container">
        {allShows &&
          filterShows.map((show, index, e) => {
            console.log();

            return (
              <div className="show-card">
                <h5 className="show-card-title">{show.name}</h5>
                <div className="show-details">
                  <img
                    src={
                      show.image !== null
                        ? show.image.original
                        : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                    }
                    className="show-card-img-top"
                    alt=""
                    onClick={() => handleClick(show.id)}
                  />

                  <div className="show-card-body">
                    <ShowMoreText
                      /* Default options */
                      lines={10}
                      more="Show more"
                      less="Show less"
                      className="content-css"
                      anchorClass="my-anchor-css-class"
                      onClick={(e) => e.executeOnClick}
                      expanded={false}
                    >
                      {replaceTags(show.summary)}
                    </ShowMoreText>
                  </div>
                  <div className="show-info">
                    <p>Genres : {show.genres.map((g) => g + ", ")}</p>
                    <p> Status : {show.status}</p>
                    <p>Rating : {show.rating.average}</p>
                    <p>Runtime : {show.runtime}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
