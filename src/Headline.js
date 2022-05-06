// child component to display the text of the news headline
import React from "react";
import { Card } from "@mui/material";

export default function Headline({ info }) {
  return (
    <>
      <Card>
        <div className="card-body">
          <h4 className="category"> {info.section} </h4>
          <h1 className="title"> {info.title} </h1>
          <h4 className="byline"> {info.byline} </h4>
          <h4 className="date"> {info.published_date} </h4>
          <p className="abstract"> {info.abstract} </p>
        </div>
      </Card>
    </>
  );
}
