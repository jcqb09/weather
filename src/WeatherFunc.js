import React, { useRef, useState, useEffect } from "react";
import Weather from "./Weather";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function WeatherFunc() {
  const APIKEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  const [clicked, setClicked] = useState(false);

  const coordinates = (loc) => {
    const url = new URL(`http://api.openweathermap.org/geo/1.0/direct`);
    url.searchParams.append(`q`, encodeURIComponent(loc));
    url.searchParams.append(`appid`, APIKEY);
    console.log(url);
    return url;
  };

  const [coord, setCoord] = useState([]);
  useEffect(() => {
    getCoord();
  }, []);

  async function getCoord() {
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=Charlottesville&appid=388f15cb721d6326cce01495c2d76b17`;
    //const api = link;
    const result = await fetch(api);
    const getResult = await result.json();
    setCoord(getResult);
  }

  const forecast = (c) => {
    const url = new URL(`https://api.openweathermap.org/data/2.5/onecall`);
    url.searchParams.append(`lat`, c.lat);
    url.searchParams.append(`lon`, c.lon);
    url.searchParams.append(`units`, `imperial`);
    url.searchParams.append(`appid`, APIKEY);
    console.log(url);
    return url;
  };

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getWeather();
  }, [coord]);

  async function getWeather() {
    //const api = link;
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=38.029306&lon=-78.4766781&units=imperial&appid=aaccf840839824cd28d5889a27fb7291`;
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
            //const c = coordinates(textFieldRef.current.value);
            getCoord();
            console.log(coord);
            //const w = forecast(coord[0]);
            getWeather();
            console.log(weather);
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
