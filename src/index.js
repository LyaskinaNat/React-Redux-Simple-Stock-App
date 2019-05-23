import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
//import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
//serviceWorker.unregister();


