// child component to show each of the daily forecasts
import React, { useState } from "react";

export default function Daily({ day }) {
  const d = day.dt * 1000;
  const date = new Date(d);
  return (
    <>
      <div>
        <p>
          Day: {date.toDateString()} Daytime Temp: {day.temp.day} Nighttime
          Temp: {day.temp.night}
        </p>
      </div>
    </>
  );
}
