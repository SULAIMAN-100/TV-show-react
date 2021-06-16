import React from "react";
import { useParams } from "react-router";
import GetCast from "./GetCast";
import "./ShowCasting.css";
import tvmaze from "../tvmaze.png";

export default function ShowCasting() {
  let { id } = useParams();

  return (
    <div>
      <div className="card-navbar">
        <img src={tvmaze} />{" "}
        <a href="/">
          <button className="back-btn">BACK TO SHOWS</button>
        </a>
      </div>
      <div className="cast-container">
        <GetCast id={id} />
      </div>
    </div>
  );
}
