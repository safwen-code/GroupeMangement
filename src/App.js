import "./App.css";
import React from "react";
import Navbars from "./components/Layout/Navbars";
import Home from "./components/content/KMScontent/Home";
import Addkm from "./components/content/KMSforms/Addkm";
import StateKm from "./components/context/StateKm";

const App = () => {
  return (
    <StateKm>
      <div className="container-fluid">
        <Navbars />
        <Home />
        <Addkm />
      </div>
    </StateKm>
  );
};

export default App;
