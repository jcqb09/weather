// child component to show each of the hourly forecasts
import React from "react";
import { Card } from "@mui/material";

export default function Hourly({ hour }) {
  const h = hour.dt * 1000;
  const time = new Date(h);

  const temp = parseInt(hour.temp);
  return (
    <div>
      <Card style={{ backgroundColor: "grey" }}>
        <h3 className="white">
          {time.toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h3>
        <p className="white">{temp}&deg;F</p>
        <p className="white">
          {hour.weather[0].main} ({hour.weather[0].description})
        </p>
      </Card>
    </div>
  );
}
