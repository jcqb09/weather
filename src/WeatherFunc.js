import React, { useRef, useState, useEffect } from "react";
import Weather from "./Weather";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function WeatherFunc() {
  const APIKEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  const [clicked, setClicked] = useState(false);
  const [loc, setLoc] = useState("");
  const [coord, setCoord] = useState([]);

  useEffect(() => {
    getCoord();
  }, []);

  async function getCoord() {
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=Charlottesville%20VA&appid=aaccf840839824cd28d5889a27fb7291`;
    //const api = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${APIKEY}`;
    const result = await fetch(api);
    const getResult = await result.json();
    setCoord(getResult);
  }

  // const forecast = (c) => {
  //   const url = new URL(`https://api.openweathermap.org/data/2.5/onecall`);
  //   url.searchParams.append(`lat`, c.lat);
  //   url.searchParams.append(`lon`, c.lon);
  //   url.searchParams.append(`units`, `imperial`);
  //   url.searchParams.append(`appid`, APIKEY);
  //   console.log(url);
  //   return url;
  // };

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getWeather();
  }, [coord]);

  async function getWeather() {
    //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&appid=${APIKEY}`;
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=38.029306&lon=-78.4766781&appid=aaccf840839824cd28d5889a27fb7291`;
    const result = await fetch(api);
    const getResult = await result.json();
    setWeather(getResult);
  }

  //   const handleClick = () => {
  //     setClicked(true);
  //     const c = coordinates(textFieldRef.current.value);
  //     getCoord(c);
  //     const w = forecast(coord[0]);
  //     getWeather(w);
  //   };

  return (
    <>
      <div>
        <h4 className="prompt"> Enter the City and State: </h4>
        <TextField
          id="myTextField"
          label="TextField"
          variant="outlined"
          inputRef={textFieldRef}
        />
        <Button
          onClick={() => {
            setClicked(true);
            setLoc(encodeURIComponent(textFieldRef.current.value));
            console.log(loc);
            getCoord();
            //console.log(coord);
            //const w = forecast(coord[0]);
            getWeather();
            //console.log(weather);
          }}
        >
          {" "}
          Enter{" "}
        </Button>

        {clicked && <h2> Weather for {textFieldRef.current.value} </h2>}
        {clicked && <Weather weatherdata={weather} />}
      </div>
    </>
  );
}
