const initState = {stock: [
    {id: '1', stock: 'TEA', dividendYield: '0', peRatio: '0', volWeightStPrice: '0', geoMean: '0'},
    {id: '2', stock: 'POP', dividendYield: '0', peRatio: '0', volWeightStPrice: '0', geoMean: '0'},
    {id: '3', stock: 'ALE', dividendYield: '0', peRatio: '0', volWeightStPrice: '0', geoMean: '0'},
    {id: '4', stock: 'GIN', dividendYield: '0', peRatio: '0', volWeightStPrice: '0', geoMean: '0'},
    {id: '5', stock: 'JOE', dividendYield: '0', peRatio: '0', volWeightStPrice: '0', geoMean: '0'},
]
}

const stockReducer = (state = initState, action) => {
    return state;
};
  
export default stockReducer;

