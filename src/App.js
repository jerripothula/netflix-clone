import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Banner from "./Components/Banner";
import Row from "./Components/Row";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl="netflixOrignals" />
      <Row title="Action" fetchUrl="action" />
      <Row title="Comedy" fetchUrl="comdey" />
      <Row title="Horror" fetchUrl="horror" />
      <Row title="Romance" fetchUrl="romance" />
      <Row title="Adventure" fetchUrl="topRated" />
      <Row title="Discovery" fetchUrl="discovery" />
      <Row title="SitComedy" fetchUrl="topRated" />
    </div>
  );
}

export default App;
