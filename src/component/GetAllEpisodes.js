import React, { useState, useEffect } from "react";

export const EpisodesContextProvider = (props) => {

  const [allEpisodesApi, setAllEpisodesApi] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((data) => data.json())
      .then((data) => setAllEpisodesApi(data));
  }, []);


};
