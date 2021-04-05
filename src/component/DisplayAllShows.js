import React, { useState } from "react";
import "./LandingPage.css";
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
      ? item.name.toLowerCase().indexOf(searchInput) !== -1
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
      <SearchBar
        searchValue={searchValue}
        filterEpisode={filterShows}
        allEpisodes={allShows}
      />
      <SelectInput episodes={allShows} handleSelect={handleSelect} />

      <div className="episodes-container">
        {allShows &&
          filterShows.map((show, index, e) => {
            console.log();

            return (
              <div className="card" style={{ width: "18rem" }} key={index}>
                <h5 className="card-title">{show.name}</h5>

                <img
                  src={
                    show.image !== null
                      ? show.image.original
                      : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                  }
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
                    {replaceTags(show.summary)}
                  </ShowMoreText>
                </div>
                <button onClick={() => handleClick(show.id)}>Episodes</button>
              </div>
            );
          })}
      </div>
    </>
  );
}
