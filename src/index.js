import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import  thunkMiddleware from 'redux-thunk';
import {changeSearchField, assignRobots } from './reducers.js'
// import { createLogger } from 'redux-logger';
import 'tachyons'

// const logger = createLogger();
// pass logger to createStore if you wanna see it in action in console

const root = combineReducers({changeSearchField, assignRobots})
const store = createStore(root, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
