import React, { useState, useEffect } from "react";
import Weather from "./Weather";

export default function WeatherFunc({ loc }) {
  const APIKEY = process.env.REACT_APP_weather_key;
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [coord, setCoord] = useState();

  useEffect(() => {
    getCoord();
  }, []);

  async function getCoord() {
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${APIKEY}`;
    console.log(api);
    const result = await fetch(api);
    const getResult = await result.json();
    setCoord(getResult);
  }

  const [weather, setWeather] = useState();

  useEffect(() => {
    if (coord) {
      getWeather();
    }
  }, [coord]);

  async function getWeather() {
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0].lat}&lon=${coord[0].lon}&units=imperial&appid=${APIKEY}`;
    console.log(api);
    const result = await fetch(api);
    const getResult = await result.json();
    setWeather(getResult);
  }

  return (
    <>
      {weather && (
        <h1 className="center" style={{ color: "#E86C4D" }}>
          Current Weather for {coord[0].name}, {coord[0].state}{" "}
          {regionNames.of(coord[0].country)}{" "}
        </h1>
      )}
      <div>{weather && <Weather weatherdata={weather} />}</div>
    </>
  );
}
