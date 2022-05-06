// major parent component for all the news app functionalities
import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import Headline from "./Headline.js";

export default function NewsApp() {
  const API_KEY = process.env.REACT_APP_news_key;
  const [news, setNews] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    // fetch(
    //   `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`
    // )
    const result = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=ZkCQR4y0Q2sHx3UyQx2rIizcijV8eYXx`
    );
    const getResult = await result.json();
    setNews(getResult);
    console.log(news);
  };

  return (
    <>
      <Card variant="contained">
        <h4>News Section </h4>
      </Card>
      <Button
        onClick={() => {
          setClicked(true);
          //getNews();
          console.log(news);
        }}
      >
        Top News Articles{" "}
      </Button>

      {clicked && news.results.map((headline) => <Headline info={headline} />)}
    </>
  );
}
