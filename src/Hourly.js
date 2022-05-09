// child component to show each of the hourly forecasts
import React from "react";
import { Card } from "@mui/material";

export default function Hourly({ hour }) {
  const h = hour.dt * 1000;
  const time = new Date(h);

  const src = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;

  const temp = parseInt(hour.temp);
  return (
    <div>
      <Card style={{ backgroundColor: "#4B88A2" }}>
        <div className="center">
          <img src={src} alt={hour.weather[0].description} />
        </div>
        <h3 className="white">
          {time.toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          - {temp}&deg;F
        </h3>
        <p className="white">
          {hour.weather[0].main} ({hour.weather[0].description})
        </p>
      </Card>
    </div>
  );
}
