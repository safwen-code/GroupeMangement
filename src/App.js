import "./App.css";
import React, { useEffect } from "react";
import Navbars from "./components/Layout/Navbars";
import Home from "./components/content/KMScontent/Home";
import Addkm from "./components/content/KMSforms/Addkm";
const App = () => {
  return (
    <div className="container-fluid">
      <Navbars />
      
      <Home />
      <Addkm />
    </div>
  );
};

export default App;
