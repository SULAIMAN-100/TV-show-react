import React, { useState, createContext, useEffect } from "react";
export const GetAllEpisodes = createContext();
export const EpisodesContextProvider = (props) => {
  const [allEpisodesApi, setAllEpisodesApi] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((data) => data.json())
      .then((data) => setAllEpisodesApi(data));
  }, []);

  return (
    <GetAllEpisodes.Provider value={{ allEpisodesApi }}>
      {props.children}
    </GetAllEpisodes.Provider>
  );
};
