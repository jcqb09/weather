import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import NewsApp from "./NewsApp";
import WeatherApp from "./WeatherApp";
import Header from "./Header";
import Error from "./Error";

function App() {
  return (
    <main style={{ backgroundColor: "#FFE6D8" }}>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/news" element={<NewsApp />} />
        <Route element={Error} />
      </Routes>
    </main>
  );
}

export default App;
