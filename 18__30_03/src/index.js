import React from 'react';
import ReactDOM from 'react-dom';

import Root from "./Root";
import {Provider} from "react-redux";

import {createStore, compose} from "redux";
import {reducer} from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers()
);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);

