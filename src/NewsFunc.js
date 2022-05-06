import React, { useState, useEffect } from "react";
import NewsApp from "./NewsApp";

export default function NewsFunc() {
  const API_KEY = process.env.REACT_APP_news_key;
  const [dailynews, setDailyNews] = useState([]);
  const [weeklynews, setWeeklyNews] = useState([]);

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

  return <div>{<NewsApp daily={dailynews} weekly={weeklynews} />}</div>;
}
