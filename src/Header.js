// will display current date and search bar (to enter location)
import React from "react";

export default function Header() {
  let today = Date.now();

  today = new Date(today).toDateString();
  return (
    <>
      <div className="center">
        <h1>{today}</h1>
      </div>
    </>
  );
}
