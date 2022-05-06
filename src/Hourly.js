// child component to show each of the hourly forecasts
import React from "react";
import { Card } from "@mui/material";

export default function Hourly({ hour }) {
  const h = hour.dt * 1000;
  const time = new Date(h);
  return (
    <div>
      <Card>
        <h3>
          {time.toLocaleTimeString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h3>
        <p>{hour.temp}</p>
      </Card>
    </div>
  );
}
