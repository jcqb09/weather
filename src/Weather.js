// component in charge of the visual parts of the weather app
import React, { useState, useEffect } from "react";
import Hourly from "./Hourly.js";
import Daily from "./Daily.js";
import { Button } from "@mui/material";

export default function Weather({ weatherdata }) {
  console.log(weatherdata);
  const [hourly, setHourly] = useState(false); // if true, show hourly forecast, if false, show 5-day forecast

  return (
    <>
      <h3> Current Weather: {weatherdata.current.temp} degrees Fahrenheit</h3>
      <h3> Feels Like: {weatherdata.current.feels_like} degrees Fahrenheit </h3>

      {hourly && (
        <Button
          onClick={() => {
            setHourly(false);
          }}
        >
          {" "}
          Show 5-Day Forecast{" "}
        </Button>
      )}
      {hourly && weatherdata.hourly.map((hour) => <Hourly hour={hour} />)}
      {!hourly && (
        <Button
          onClick={() => {
            setHourly(true);
          }}
        >
          {" "}
          Show Hourly Forecast
        </Button>
      )}
      {!hourly && weatherdata.daily.map((day) => <Daily day={day} />)}
    </>
  );
}
