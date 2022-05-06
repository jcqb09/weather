// child component to show each of the hourly forecasts
import React from "react";

export default function Hourly({ hour }) {
  const h = hour.dt * 1000;
  const time = new Date(h);
  return (
    <div>
      <p>
        {" "}
        Hour: {time.toLocaleTimeString("en-us")} Temp: {hour.temp}{" "}
      </p>
    </div>
  );
}
