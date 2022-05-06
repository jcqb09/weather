// functioal component in charge of the back-end ? side of the weather app
// will generate API links

import React, { useState, useRef } from "react";
import Weather from "./Weather";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function WeatherControls() {
  const API_KEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  // function to get the link for the coordinates using the API
  const coordinates = (loc) => {
    const url = new URL("https://api.openweathermap.org/geo/1.0/direct");
    url.searchParams.append("q", encodeURIComponent(loc));
    url.searchParams.append("appid", API_KEY);
    console.log(url);
    return url;
  };

  const fetchCoord = (link) => {
    fetch(link)
      .then((response) => response.json())
      .then((result) => setCoord(result));
    console.log(coord);
    return coord;
  };
  const [coord, setCoord] = useState([]);

  const location = (c) => {
    console.log(c);
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("lat", c[0].lat);
    url.searchParams.append("lon", c[0].lon);
    url.searchParams.append("units", "imperial");
    url.searchParams.append("appid", API_KEY);
    console.log(url);
    return url;
  };

  const fetchWeather = (link) => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
    return weather;
  };

  const [weather, setWeather] = useState([]);

  const handleClick = () => {
    setClicked(true);
    setCoord(fetchCoord(coordinates(textFieldRef.current.value)));
    fetchWeather(location(coord));
    console.log(weather);
  };
  const [clicked, setClicked] = useState(false);

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
          onClick={(e) => {
            e.preventDefault();
            handleClick();
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
