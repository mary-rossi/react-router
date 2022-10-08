import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Stock />
        <Dashboard />
    </div>
  );
}

export default App;
