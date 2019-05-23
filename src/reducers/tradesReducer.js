const initState = {
    trades: [
        {id: '1', transactionDate: '23 May 2019 10:20', stock: 'TEA', buyOrSell: 'Buy', price: '150', quantity: '50'},
        {id: '2', transactionDate: '23 May 2019 10:25', stock: 'POP', buyOrSell: 'Sell', price: '230', quantity: '150'},
        {id: '3', transactionDate: '23 May 2019 10:30', stock: 'ALE', buyOrSell: 'Sell', price: '80', quantity: '200'},
        {id: '4', transactionDate: '23 May 2019 10:35', stock: 'GIN', buyOrSell: 'Buy', price: '205', quantity: '125'},
        {id: '5', transactionDate: '23 May 2019 10:40', stock: 'JOE', buyOrSell: 'Buy', price: '190', quantity: '195'},
    ]
}

const tradesReducer = (state = initState, action) => {
    return state;
};
  
export default tradesReducer;