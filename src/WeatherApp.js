// major parent component for all the weather app functionalities
import React, { useState, useEffect, useRef } from "react";
import WeatherFunc from "./WeatherFunc";
import { TextField, Button } from "@mui/material";

export default function WeatherApp() {
  const textFieldRef = useRef();

  const [clicked, setClicked] = useState();

  return (
    <>
      <div>
        <h4 className="prompt"> Enter the City: </h4>
        <TextField
          id="myTextField"
          label="TextField"
          variant="outlined"
          inputRef={textFieldRef}
        />
        <Button
          variant="contained"
          onClick={() => {
            setClicked(true);
          }}
        >
          {" "}
          Enter{" "}
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            setClicked(false);
          }}
        >
          Reset
        </Button>
      </div>

      <div>
        {clicked && (
          <h1 className="center">
            {" "}
            Current Weather for {textFieldRef.current.value}
          </h1>
        )}
        {clicked && (
          <WeatherFunc loc={encodeURIComponent(textFieldRef.current.value)} />
        )}
      </div>
    </>
  );
}
