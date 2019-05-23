import React, { Component } from 'react'
import Maketrade from './makeTrade'
import RecentTrades from './recentTrades'
import { connect } from 'react-redux'

class tradesDashboard extends Component {
  render() {

      const { trades } = this.props;
//            console.log(trades)
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m4">
            <Maketrade />
          </div>
          <div className="col s12 m7 offset-m1">
            <RecentTrades trades={ trades } />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      trades: state.trade.trades
    }
  }
  
  export default connect(mapStateToProps)(tradesDashboard)