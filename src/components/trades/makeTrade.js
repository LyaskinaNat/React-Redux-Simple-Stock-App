import React, { Component } from 'react'
import { connect } from 'react-redux'
// Import Materialize
import M from 'materialize-css';

class Maketrades extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
}
    

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Trade submitted");
    }
    render() {
        return (
            <div className=" section trades">
                <div className="card test grey darken-3 z-depth-1">
                    <div className="card-content">
                        <span className="card-title">Make a Trade</span>
                        <form className="grey darken-3" onSubmit={this.handleSubmit} >
                        <label>Stock</label>
  <select className="browser-default" defaultValue={'DEFAULT'}>
    <option value="" value="DEFAULT" disabled>Choose Stock</option>
    <option value="1">TEA</option>
    <option value="2">POP</option>
    <option value="3">ALE</option>
    <option value="3">GIN</option>
    <option value="3">JOE</option>
  </select>
  <label>Buy or Sell</label>
  <select className="browser-default" defaultValue={'DEFAULT'}>
    <option value="" value="DEFAULT" disabled>Choose Buy or Sell</option>
    <option value="1">Buy</option>
    <option value="2">Sell</option>
    
  </select>
         
                            <div className="input-field">
                                <input type="number" autoComplete="off" id='price' />
                                <label htmlFor="price">Price</label>
                            </div>
                            <div className="input-field">
                                <input type="number" autoComplete="off" id='quantity' />
                                <label htmlFor="quantity">Quantity</label>
                            </div>
                            <div className="input-field">
                                <button className="btn blue z-depth-7">Make a Trade</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Maketrades