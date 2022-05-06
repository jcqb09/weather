// component in charge of the visual parts of the weather app
import React, { useState, useEffect } from "react";
import Hourly from "./Hourly.js";
import Daily from "./Daily.js";
import { Button, Card } from "@mui/material";

export default function Weather({ weatherdata }) {
  console.log(weatherdata);
  const [hourly, setHourly] = useState(false); // if true, show hourly forecast, if false, show 5-day forecast
  const [icon, setIcon] = useState();

  const getIcon = () => {
    const src = `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`;
    setIcon(src);
  };

  const temp = parseInt(weatherdata.current.temp);
  const fl = parseInt(weatherdata.current.feels_like);

  return (
    <>
      <Card variant="outlined" className="current">
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          class="image"
          alt={weatherdata.current.weather[0].description}
        />
        <h2>{temp}&deg;F</h2>
        <h4> {weatherdata.current.weather[0].description}</h4>
        <h4> feels like: {fl}&deg;F </h4>
        <h4> humidity: {weatherdata.current.humidity}%</h4>
        <h4> </h4>
      </Card>
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
