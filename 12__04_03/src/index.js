import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import Root from "./Root";
import {Provider} from "react-redux";

import {createStore} from "redux";
import {reducer} from "./store/reducer";
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);

