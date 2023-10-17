import React from "react";
import Hamburger from "./Components/Hamburger";
import NavBar from "./Components/NavBar";
import Grid from "./Components/Grid";
import Chart from "./Components/Chart/Chart";
import Products from "./Components/Products";
import "./App.css";

function App() {
  return (
    <>
      <Hamburger />
      <NavBar />
      <div className="align">
      <Grid />
      <Chart />
      <Products />
      </div>
    </>
  );
}

export default App;
