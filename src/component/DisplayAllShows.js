import React, { useState, useEffect } from "react";
import "./DisplayAllShows.css";
import { allShows } from "./Shows";
import SearchBar from "./SearchBar";
import SelectInput from "./SelectInput";
import ShowMoreText from "react-show-more-text";
import { useHistory } from "react-router-dom";
import tvmaze from "../tvmaze.png";
export default function DisplayAllShows() {
  const [searchInput, setSearchInput] = useState([]);
  const [selectValue, setSelectValue] = useState("Select All Shows");
  // const [allShows, setAllShows] = useState([]);

  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/episodes/${id}`);
  };
  const handleCast = (id) => {
    history.push(`/show-cast/${id}`);
  };
  const searchValue = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };
  let filterShows = allShows.filter((item) =>
    selectValue === "Select All Shows" || searchInput.length > 0
      ? item.name.toLowerCase().indexOf(searchInput) !== -1 ||
        item.summary.toLowerCase().includes(searchInput)
      : item.name === selectValue
  );
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
    setSearchInput([]);
  };
  const replaceTags = (text) => {
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  // useEffect(() => {
  //   fetch("https://api.tvmaze.com/shows")
  //     .then((res) => res.json())
  //     .then((data) => setAllShows(data));
  // }, []);

  return (
    <>
      {" "}
      <div className="card-navbar">
        <img src={tvmaze} />{" "}
        <SearchBar
          searchValue={searchValue}
          filterEpisode={filterShows}
          allEpisodes={allShows}
          placeholder="search for a show"
        />{" "}
        <SelectInput
          episodes={allShows}
          handleSelect={handleSelect}
          select="Select All Shows"
        />{" "}
      </div>
      <div className="shows-container">
        {allShows &&
          filterShows.map((show, index, e) => {
            return (
              <div key={index} className="show-card">
                <h5 className="show-card-title">{show.name}</h5>{" "}
                <div className="show-details">
                  {" "}
                  <img
                    src={
                      show.image !== null
                        ? show.image.medium
                        : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                    }
                    className="show-card-img-top"
                    alt=""
                    onClick={() => handleClick(show.id)}
                  />{" "}
                  <div className="show-card-body">
                    {" "}
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
                      {" "}
                      <p> {replaceTags(show.summary)} </p>
                    </ShowMoreText>
                  </div>{" "}
                  <div className="show-info">
                    {" "}
                    <p> Genres : {show.genres.map((g) => g + ", ")} </p>
                    <p> Status : {show.status}</p>{" "}
                    <p> Rating : {show.rating.average} </p>
                    <p>Runtime : {show.runtime}</p>{" "}
                    <button onClick={() => handleCast(show.id)}>
                      {" "}
                      SHOW CAST{" "}
                    </button>
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
      </div>{" "}
    </>
  );
}
