// functioal component in charge of the back-end ? side of the weather app
// will generate API links

import React, { useState, useRef, useEffect } from "react";
import Weather from "./Weather";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function WeatherControls() {
  const API_KEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  const [state, setState] = useState({
    city: "",
    clicked: false,
    coordurl: "",
    coord: [],
    weatherurl: "",
    weather: [],
  });

  // function to get the link for the coordinates using the API
  const coordinates = () => {
    const url = new URL("http://api.openweathermap.org/geo/1.0/direct");
    url.searchParams.append("q", encodeURIComponent(state.city));
    url.searchParams.append("appid", API_KEY);
    console.log(url);
    setState({ coordurl: url });
    console.log(state.coordurl);
    return url;
  };

  useEffect(() => {
    async function fetchCoord() {
      const resp = await fetch(state.coordurl);
      const json = await resp.json();

      setState({ coord: json.data });
    }

    fetchCoord();
  }, [state.coordurl]);

  const location = (lat, lon) => {
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", lon);
    url.searchParams.append("units", "imperial");
    url.searchParams.append("appid", API_KEY);
    console.log(url);
    setState({ weatherurl: url });
    console.log(state.weatherurl);
    return url;
  };

  useEffect(() => {
    async function fetchWeather() {
      const resp = await fetch(state.weatherurl);
      const json = await resp.json();

      setState({ weather: json.data });
    }

    fetchWeather();
  }, [state.weatherurl]);

  const handleClick = () => {
    setState({ clicked: true });
    console.log(coordinates());

    setState({ coordurl: coordinates() });
    console.log(state.coord);
    location(state.coord[0].lat, state.coord[0].lon);
  };

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
            setState({ city: textFieldRef.current.value });
            handleClick();
          }}
        >
          {" "}
          Enter{" "}
        </Button>

        {state.clicked && <h2> Weather for {textFieldRef.current.value} </h2>}
        {state.clicked && <Weather weatherdata={state.weather} />}
      </div>
    </>
  );
}
