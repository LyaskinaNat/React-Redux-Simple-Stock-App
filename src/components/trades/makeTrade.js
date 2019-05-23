import React, { Component } from 'react'

class Maketrades extends Component {
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
                            <div className="input-field">
                                <input type="text" id='stock' />
                                <label htmlFor="stock">Stock</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id='buyorsell' />
                                <label htmlFor="buyorsell">Buy or Sell</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id='price' />
                                <label htmlFor="stock">Price</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id='quantity' />
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