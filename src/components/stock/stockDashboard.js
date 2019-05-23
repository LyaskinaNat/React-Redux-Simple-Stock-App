import React, { Component } from 'react'
import { connect } from 'react-redux'

class StockDashdoard extends Component {
    render() {
      const { stock } = this.props
      console.log(stock)
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
        { stock && stock.map(share => {
        return (
            <tr key={ share.id }>
            <td>{ share.stock }</td>
            <td>{ share.dividendYield }</td>
            <td>{ share.peRatio }</td>
            <td>{ share.volWeightStPrice }</td>
            <td>{ share.geoMean }</td>

          </tr>
          )
      })}   
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

const mapStateToProps = (state) => {
  return {
    stock: state.stock.stock
  }
}

export default connect(mapStateToProps)(StockDashdoard)


