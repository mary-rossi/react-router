import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Stock />
      <Dashboard />
    </div>
  );
}

export default App;
