import React from "react";
import allEpisodes from "./episodes";
import "./LandingPage.css";
export default function LandingPage() {
  const seasonNumbers = (episode) => {
    if (episode.season < 10 && episode.number < 10) {
      return ` - S0${episode.season}E0${episode.number}`;
    } else {
      return ` - S0${episode.season}E${episode.number}`;
    }
  };

  const replaceTags = (text, index) => {
  return text.replace(/(<([^>]+)>)/gi, "");
 
  };
  return (
    <div className="episodes-container">
      {allEpisodes &&
        allEpisodes.allEpisodes.map((episode, index) => {
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
                  {replaceTags(episode.summary, index)}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
