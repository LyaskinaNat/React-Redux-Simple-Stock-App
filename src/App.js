import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar'
import Tradedashdoard from './components/trades/tradesDashboard'
import Stockdashboard from './components/stock/stockDashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Tradedashdoard />
      <Stockdashboard />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
