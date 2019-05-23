import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar'
import TradeDashdoard from './components/trades/tradesDashboard'
import StockDashboard from './components/stock/stockDashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <TradeDashdoard />
      <StockDashboard />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
