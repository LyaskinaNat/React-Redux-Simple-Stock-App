import tradesReducer from './tradesReducer'
import stockReducer from './stockReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    trades: tradesReducer,
    stock: stockReducer
});

export default rootReducer

