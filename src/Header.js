// will display current date and search bar (to enter location)
import React from "react";

export default function Header() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(1, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return (
    <>
      <div>
        <h1> Today's Date: {today}</h1>
      </div>
    </>
  );
}
