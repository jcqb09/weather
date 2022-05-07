import React, { useRef, useState, useEffect } from "react";
import Weather from "./Weather";
import { Button, TextField } from "@mui/material";

export default function WeatherFunc({ loc }) {
  const APIKEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  const [coord, setCoord] = useState([]);
  const [go, setGo] = useState(false);

  useEffect(() => {
    console.log(loc);
    getCoord();
    console.log(coord);
  }, []);

  async function getCoord() {
    console.log(loc);
    //const api = `http://api.openweathermap.org/geo/1.0/direct?q=Charlottesville%20VA&appid=aaccf840839824cd28d5889a27fb7291`;
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${APIKEY}`;
    //console.log(api);
    const result = await fetch(api);
    const getResult = await result.json();
    setCoord(getResult);
    //console.log(coord);
  }

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    console.log(coord);
    getWeather();
    //console.log(weather);
  }, [coord]);

  async function getWeather() {
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0].lat}&lon=${coord[0].lon}&units=imperial&appid=${APIKEY}`;
    //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=38.029306&lon=-78.4766781&&units=imperial&appid=aaccf840839824cd28d5889a27fb7291`;
    //console.log(api);
    const result = await fetch(api);
    const getResult = await result.json();
    setWeather(getResult);
    //console.log(weather);
  }

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <>
      <div>{<Weather weatherdata={weather} />}</div>
    </>
  );
}
