import React, { useRef, useState, useEffect } from "react";
import Weather from "./Weather";
import { Grid, Card } from "@mui/material";

export default function WeatherFunc({ loc }) {
  const APIKEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  const [coord, setCoord] = useState();
  const [go, setGo] = useState(false);
  const [test, setTest] = useState("");

  useEffect(() => {
    console.log(loc);
    console.log(getCoord());
    console.log(coord);
  }, []);

  async function getCoord() {
    //const api = `http://api.openweathermap.org/geo/1.0/direct?q=Charlottesville%20VA&appid=aaccf840839824cd28d5889a27fb7291`;
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${APIKEY}`;
    //console.log(api);
    const result = await fetch(api);
    const getResult = await result.json();
    setCoord(getResult);
    // console.log(coord);
  }

  const [weather, setWeather] = useState();

  useEffect(() => {
    if (coord) {
      console.log(coord);
      getWeather();
    }
  }, [coord]);

  async function getWeather() {
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0].lat}&lon=${coord[0].lon}&units=imperial&appid=${APIKEY}`;
    //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=38.029306&lon=-78.4766781&&units=imperial&appid=aaccf840839824cd28d5889a27fb7291`;
    console.log(api);
    const result = await fetch(api);
    const getResult = await result.json();
    setWeather(getResult);
    //console.log(weather);
  }

  useEffect(() => {
    console.log(weather);
    console.log(weather);
  }, [weather]);

  return (
    <>
      {weather && <Weather weatherdata={weather} />}
      {/* <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
      >
        {" "}
        {
          <Grid item xs={20}>
            <Card variant="outlined" className="current">
              <img
                src="http://openweathermap.org/img/wn/${icon}@2x.png"
                // alt={weather.current.weather[0].description}
              />
              <h2>{weather.current.temp}&deg;F</h2>
              <p className="text" margin-bottom="10px">
                {" "}
                {weather.current.weather[0].main} (
                {weather.current.weather[0].description})
              </p>
              <p className="text">
                {" "}
                feels like: {weather.current.feels_like}&deg;F{" "}
              </p>
              <p className="text"> humidity: {weather.current.humidity}%</p>
              <p>
                {" "}
                sunrise: {weather.current.sunrise} sunset:{" "}
                {weather.current.sunset}
              </p>
              <h4> </h4>
            </Card>
          </Grid>
        }
      </Grid> */}
    </>
  );
}
