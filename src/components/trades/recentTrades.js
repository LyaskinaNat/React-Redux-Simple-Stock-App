import React from 'react'

const RecentTrades = ({trades}) => {
   
  //      console.log(trades);
    return (
        <div className=" section trades">
            <div className="card grey darken-3 z-depth-1">
                <div className="card-content">
                    <span className="card-title">Recent trades</span>
                    <table>
        <thead>
          <tr>
              <th>Transaction Date</th>
              <th>Stock</th>
              <th>Buy or Sell</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
        { trades && trades.map(trade => {
        return (
            <tr key={ trade.id }>
            <td>{trade.transactionDate}</td>
            <td>{trade.stock}</td>
            <td>{trade.buyOrSell}</td>
            <td>{trade.price}</td>
            <td>{trade.quantity}</td>
            </tr>
        )
      })} 
       </tbody>
      </table>
                </div>
            </div>
        </div>
    )
}


export default RecentTrades


