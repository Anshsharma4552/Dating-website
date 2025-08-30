import React from "react";
import "./App.css";
import Landing from "./pages/landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing />
    </div>
  );
}

export default App;
