import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import { conditionsReducer } from './reducers/conditionsReducer'

let store = createStore(conditionsReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)