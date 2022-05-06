// major parent component for all the news app functionalities
import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import Headline from "./Headline.js";

export default function NewsApp() {
  const API_KEY = process.env.REACT_APP_news_key;
  const [dailynews, setDailyNews] = useState([]);
  const [weeklynews, setWeeklyNews] = useState([]);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  useEffect(() => {
    getDailyNews();
    getWeeklyNews();
  }, []);

  const getDailyNews = async () => {
    const result = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
    );
    const getResult = await result.json();
    setDailyNews(getResult);
  };

  const getWeeklyNews = async () => {
    const result = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`
    );
    const getResult = await result.json();
    setWeeklyNews(getResult);
  };

  const handleClick1 = () => {
    clicked1 ? setClicked1(false) : setClicked1(true);
  };

  const handleClick2 = () => {
    clicked2 ? setClicked2(false) : setClicked2(true);
  };

  return (
    <>
      <h4>News Section </h4>

      <Button onClick={() => handleClick1()}>
        {" "}
        Show Today's Top Articles{" "}
      </Button>
      <Button onClick={() => handleClick2()}>
        {" "}
        Show This Week's Top Articles{" "}
      </Button>
      {clicked1 && dailynews.results.map((info) => <Headline info={info} />)}
      {clicked2 && weeklynews.results.map((info) => <Headline info={info} />)}
    </>
  );
}
