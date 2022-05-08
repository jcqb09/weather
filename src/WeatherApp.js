// major parent component for all the weather app functionalities
import React, { useState, useEffect, useRef } from "react";
import WeatherFunc from "./WeatherFunc";
import { TextField, Button } from "@mui/material";

export default function WeatherApp() {
  const APIKEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  const [clicked, setClicked] = useState();

  return (
    <>
      <div>
        <h4> Weather Section </h4>
        <h4 className="prompt"> Enter the City: </h4>
        <TextField
          id="myTextField"
          label="TextField"
          variant="outlined"
          inputRef={textFieldRef}
        />
        <Button
          variant="outlined"
          onClick={() => {
            setClicked(true);
          }}
        >
          {" "}
          Enter{" "}
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            setClicked(false);
          }}
        >
          Reset
        </Button>
      </div>

      <div>
        {clicked && <h1> Current Weather for {textFieldRef.current.value}</h1>}
        {clicked && (
          <WeatherFunc loc={encodeURIComponent(textFieldRef.current.value)} />
        )}
      </div>
    </>
  );
}
