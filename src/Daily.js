// child component to show each of the daily forecasts
import React, { useState } from "react";
import { Card } from "@mui/material";

export default function Daily({ day }) {
  const d = day.dt * 1000;
  const date = new Date(d);

  const src = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

  const hi = parseInt(day.temp.max);
  const lo = parseInt(day.temp.min);
  return (
    <>
      <Card style={{ backgroundColor: "#004F6E", height: "25vw" }}>
        <div className="center">
          <img src={src} alt={day.weather[0].description} />
        </div>
        <h3 className="white-title"> {date.toDateString()}</h3>
        <h3 className="white-title">
          {" "}
          HIGH {hi}&deg;F / LOW {lo}&deg;F
        </h3>
        <p className="white">
          {" "}
          {day.weather[0].main} ({day.weather[0].description})
        </p>
        <p className="white"> chance of precipitation: {day.pop}%</p>
      </Card>
    </>
  );
}
