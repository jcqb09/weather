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
      <Card>
        <h3 className="body"> {date.toDateString()}</h3>
        <p> daytime: {daytemp}&deg;F</p>
        <p> nighttime: {nighttemp}&deg;F</p>
      </Card>
    </>
  );
}
