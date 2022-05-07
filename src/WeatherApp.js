// major parent component for all the weather app functionalities
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import WeatherFunc from "./WeatherFunc";
import { TextField, Button } from "@mui/material";

export default function WeatherApp() {
  const APIKEY = process.env.REACT_APP_weather_key;
  const textFieldRef = useRef();

  //  const [coord, setCoord] = useState([]);
  const [clicked, setClicked] = useState();
  //const [loc, setLoc] = useState();

  // useEffect(() => {
  //   setLoc(encodeURIComponent(textFieldRef.current.value));
  // }, [clicked]);

  // async function getCoord(loc) {
  //   console.log(loc);
  //   //const api = `http://api.openweathermap.org/geo/1.0/direct?q=Charlottesville%20VA&appid=aaccf840839824cd28d5889a27fb7291`;
  //   const api = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${APIKEY}`;
  //   const result = await fetch(api);
  //   const getResult = await result.json();
  //   setCoord(getResult);
  // }

  return (
    <>
      <div>
        <h4> Weather Section </h4>
        <h4 className="prompt"> Enter the City and State: </h4>
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
            console.log(encodeURIComponent(textFieldRef.current.value));
          }}
        >
          {" "}
          Enter{" "}
        </Button>
      </div>
      {clicked && <h1> Current Weather for {textFieldRef.current.value}</h1>}
      {clicked && (
        <WeatherFunc loc={encodeURIComponent(textFieldRef.current.value)} />
      )}
    </>
  );
}
