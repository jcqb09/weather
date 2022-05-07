// will display current date and search bar (to enter location)
import React from "react";

export default function Header() {
  let today = Date.now();
  console.log(today);
  today = new Date(today).toDateString();
  return (
    <>
      <div>
        <h1>{today}</h1>
      </div>
    </>
  );
}
