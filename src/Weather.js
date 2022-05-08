// component in charge of the visual parts of the weather app
import React, { useState, useEffect } from "react";
import Hourly from "./Hourly.js";
import Daily from "./Daily.js";
import { Button, Card, Grid } from "@mui/material";

export default function Weather({ weatherdata }) {
  console.log(weatherdata);
  const [hourly, setHourly] = useState(false); // if true, show hourly forecast, if false, show 5-day forecast

  const src = `http://openweathermap.org/img/wn/${weatherdata.current.weather[0].icon}@2x.png`;

  const temp = parseInt(weatherdata.current.temp);
  const fl = parseInt(weatherdata.current.feels_like);

  let rise = new Date(weatherdata.current.sunrise * 1000);
  rise = rise.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let set = new Date(weatherdata.current.sunset * 1000);
  set = set.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
      >
        {" "}
        {
          <Grid item xs={20}>
            <Card variant="outlined" className="current">
              <img src={src} alt={weatherdata.current.weather[0].description} />
              <h2>{temp}&deg;F</h2>
              <p className="text" margin-bottom="10px">
                {" "}
                {weatherdata.current.weather[0].main} (
                {weatherdata.current.weather[0].description})
              </p>
              <p className="text"> feels like: {fl}&deg;F </p>
              <p className="text"> humidity: {weatherdata.current.humidity}%</p>
              <p>
                {" "}
                sunrise: {rise} sunset: {set}
              </p>
              <h4> </h4>
            </Card>
          </Grid>
        }
      </Grid>

      {hourly && (
        <Button
          variant="contained"
          onClick={() => {
            setHourly(false);
          }}
        >
          {" "}
          Show 8-Day Forecast{" "}
        </Button>
      )}
      {hourly && (
        <Grid container spacing={1}>
          {" "}
          {weatherdata.hourly.map((hour, idx) => {
            if (idx <= 35) {
              return (
                <Grid item xs={4}>
                  <Hourly hour={hour} key={hour.dt} />
                </Grid>
              );
            }
          })}{" "}
        </Grid>
      )}
      {!hourly && (
        <Button
          variant="contained"
          onClick={() => {
            setHourly(true);
          }}
        >
          {" "}
          Show 36-Hour Forecast
        </Button>
      )}
      {!hourly && (
        <Grid container spacing={2}>
          {" "}
          {weatherdata.daily.map((day) => (
            <Grid item xs={3}>
              {" "}
              <Daily day={day} key={day.dt} />{" "}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
