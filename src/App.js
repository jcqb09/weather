import "./App.css";
import NewsApp from "./NewsApp";
import WeatherApp from "./WeatherApp";
import Header from "./Header";

function App() {
  return (
    <div style={{ backgroundColor: "#FFE6D8" }}>
      <>
        <Header />
        <WeatherApp />
        <NewsApp />
      </>
    </div>
  );
}

export default App;
