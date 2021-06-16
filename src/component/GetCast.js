import React, { useState, useEffect } from "react";
import "./ShowCasting.css";

export default function GetCast({ id }) {
  const [cast, setCast] = useState(null);

  console.log(cast);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then((res) => res.json())
      .then((data) => setCast(data));
  }, [id]);

  const calculateAge = (birthDate, deathDate) => {
    var today = new Date();
    var date = Number(today.getFullYear());
    var birthYear = Number(birthDate.slice(0, 4));
    var deathYear = Number(deathDate !== null ? deathDate.slice(0, 4) : "");

    if (deathDate == null) {
      return date - birthYear;
    } else {
      return deathYear - birthYear;
    }
  };

  return (
    <div className="cast-container">
      {cast
        ? cast._embedded.cast.map(({ person }) => {
            return (
              <div key={person.id} className="cast-card">
                <div>
                  <img
                    src={
                      person.image
                        ? person.image.medium
                        : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                    }
                    alt=""
                  />
                  <h2>{person.name !== null ? person.name : "No Name"}</h2>
                  <div className="cast-info">
                    <p>
                      Country :{" "}
                      {person.country !== null
                        ? person.country.name
                        : "No Country"}
                    </p>
                    <p>
                      Gender :{" "}
                      {person.gender !== null ? person.gender : "No gender"}
                    </p>
                    <p>
                      Born :{" "}
                      {person.birthday !== null
                        ? person.birthday
                        : "No birthday"}
                    </p>
                    <p>
                      Age :{" "}
                      {person.birthday && person.deathday
                        ? calculateAge(person.birthday, person.deathday)
                        : "No Age"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
}
