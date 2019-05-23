import React, { Component } from 'react'

class Stockdashdoard extends Component {
    render() {
    return (
        <div className=" section trades dashboard">
        <div className="row">
          <div className="col s12 m12">
            <div className="card grey darken-3 z-depth-1">
                <div className="card-content">
                    <span className="card-title">My Stock</span>
                    <table>
        <thead>
          <tr>
              <th>Stock</th>
              <th>Dividend Yield</th>
              <th>P/E Ratio</th>
              <th>Volume Weighted Stock Price</th>
              <th>Geometric mean</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>TEA</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>POP</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>ALE</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>GIN</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>JOE</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
}

export default Stockdashdoard


