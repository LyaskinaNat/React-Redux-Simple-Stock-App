import React, { Component } from 'react'
import Maketrade from './makeTrade'
import Recenttrades from './recentTrades'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m4">
            <Maketrade />
          </div>
          <div className="col s12 m7 offset-m1">
            <Recenttrades />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard