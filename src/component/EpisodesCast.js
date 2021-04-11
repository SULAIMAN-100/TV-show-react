import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import GetCast from "./GetCast";
import "./ShowCasting.css";

export default function EpisodesCast() {
  let { id } = useParams();
  return (
    <div>
      <GetCast id={id} />
    </div>
  );
}
