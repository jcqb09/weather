// major parent component for all the weather app functionalities
import React, { useEffect } from "react";
import Header from "./Header";
import WeatherFunc from "./WeatherFunc";

export default function WeatherApp() {
  return (
    <>
      <div>
        <h4> Weather Section </h4>
        <WeatherFunc />
      </div>
    </>
  );
}
