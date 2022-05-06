// child component to display the text of the news headline
import React from "react";

export default function Headline({ info }) {
  return (
    <div>
      <p> {info.title} </p>
    </div>
  );
}
