import React from "react";
import { useParams } from "react-router";
import GetCast from "./GetCast";
import "./ShowCasting.css";

export default function ShowCasting() {
  let { id } = useParams();

  return (
    <div className="cast-container">
      <GetCast id={id} />
    </div>
  );
}
