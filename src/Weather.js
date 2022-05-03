// component in charge of the visual parts of the weather app
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function Weather({ weatherdata }) {
  console.log(weatherdata);
  const [daily, setDaily] = useState(true);

  return (
    <>
      <h3> Current Weather: {weatherdata.current.temp} degrees Fahrenheit</h3>
      <h3> Feels Like: {weatherdata.current.feels_like} degrees Fahrenheit </h3>

      {daily && <Button> Show 5-Day Forecast </Button>}
      {!daily && <Button> Show Hourly Forecast</Button>}
    </>
  );
}
