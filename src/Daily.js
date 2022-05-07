// child component to show each of the daily forecasts
import React, { useState } from "react";
import { Card } from "@mui/material";

export default function Daily({ day }) {
  const d = day.dt * 1000;
  const date = new Date(d);

  const daytemp = parseInt(day.temp.day);
  const nighttemp = parseInt(day.temp.night);
  return (
    <>
      <Card style={{ backgroundColor: "grey" }}>
        <h3 className="white-title"> {date.toDateString()}</h3>
        <p className="white">
          {" "}
          {day.weather[0].main} ({day.weather[0].description})
        </p>
        <p className="white"> daytime: {daytemp}&deg;F</p>
        <p className="white"> nighttime: {nighttemp}&deg;F</p>
        <p className="white"> chance of precipitation: {day.pop}%</p>
      </Card>
    </>
  );
}
