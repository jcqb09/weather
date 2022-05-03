// major parent component for all the news app functionalities
import React from "react";
import Card from "@mui/material/Card";

export default function NewsApp() {
  const API_KEY = process.env.REACT_APP_news_key;
  return (
    <>
      <Card variant="contained">
        <h4>News Section </h4>
      </Card>
    </>
  );
}
