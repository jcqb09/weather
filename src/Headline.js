// child component to display the text of the news headline
import React, { useState } from "react";
import { Card } from "@mui/material";
import Thumbnail from "./Thumbnail";

export default function Headline({ info }) {
  return (
    <>
      <Card>
        <div>
          {" "}
          <h2 className="category"> {info.section} </h2>
        </div>
        <div className="center">
          {<Thumbnail media={info} />}
          {/* <h4> {alt} </h4> */}
        </div>
        <div className="card-body">
          <h1 className="title"> {info.title} </h1>
          <h4 className="byline"> {info.byline} </h4>
          <h4 className="date"> {info.published_date} </h4>
          <p className="abstract"> {info.abstract} </p>
        </div>
      </Card>
    </>
  );
}
