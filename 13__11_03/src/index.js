import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import Root from "./Root";
import {Provider} from "react-redux";

import {createStore, combineReducers} from "redux";
import {reducer} from "./store/reducer";
import {filterReducer} from "./store/filterReducer";

const rootReducer = combineReducers({
    phonesData: reducer,
    filterData: filterReducer
});

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);

