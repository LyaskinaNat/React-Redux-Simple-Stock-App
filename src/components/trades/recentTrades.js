import React, { Component } from 'react'

class Recenttrades extends Component {
    render() {
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
          <tr>
            <td>23 May 2019</td>
            <td>TEA</td>
            <td>Buy</td>
            <td>230</td>
            <td>105</td>
          </tr>
          <tr>
            <td>23 May 2019</td>
            <td>POP</td>
            <td>Buy</td>
            <td>230</td>
            <td>105</td>
          </tr>
          <tr>
            <td>23 May 2019</td>
            <td>ALE</td>
            <td>Buy</td>
            <td>230</td>
            <td>105</td>
          </tr>
          <tr>
            <td>23 May 2019</td>
            <td>GIN</td>
            <td>Buy</td>
            <td>230</td>
            <td>105</td>
          </tr>
          <tr>
            <td>23 May 2019</td>
            <td>JOE</td>
            <td>Buy</td>
            <td>230</td>
            <td>105</td>
          </tr>
        </tbody>
      </table>
                </div>
            </div>
        </div>
    )
}
}

export default Recenttrades


