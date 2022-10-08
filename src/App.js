import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import stocks from "./components/StockData";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route 
        path="/stocks/:symbol"
        render={(routerProps) => <Stock allStocks={stocks} {...routerProps} />}/>
        <Route path='/stocks'><Dashboard /></Route>
      </Switch>
    </div>
  );
}

export default App;
