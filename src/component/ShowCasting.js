import React, { useState, useEffect } from "react";
import "./ShowCasting.css";
export default function ShowCasting() {
  const [cast, setCast] = useState(null);
  const getCastInfo = () => {
    fetch(`http://api.tvmaze.com/shows/527?embed=cast`)
      .then((res) => res.json())
      .then((data) => setCast(data));
  };
  useEffect(() => {
    getCastInfo();
  }, []);

  const calculateAge = (birthDate, deathDate) => {
    if (deathDate == null) {
      return Number(new Date()) - Number(birthDate);
    } else {
      return Number(deathDate) - Number(birthDate);
    }
  };

  return (
    <div className="cast-container">
      {cast &&
        cast._embedded.cast.map(({ id, person }) => {
          return (
            <div className="cast-card">
              <div>
                <img src={person.image.medium} alt="" />
                <h2>{person.name}</h2>
                <div className="cast-info">
                  <p>Country : {person.country.name}</p>
                  <p>Gender : {person.gender}</p>
                  <p>Born : {person.birthday}</p>
                  <p>Age : {calculateAge(person.birthday, person.deathday)}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
