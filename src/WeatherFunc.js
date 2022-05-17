import React, { useState, useEffect } from "react";
import Weather from "./Weather";

export default function WeatherFunc({ loc }) {
  const APIKEY = process.env.REACT_APP_weather_key;

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

  return <>{weather && <Weather weatherdata={weather} />}</>;
}
