import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import Root from "./Root";
import {Provider} from "react-redux";

import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {reducer} from "./store/reducer";
import {filterReducer} from "./store/filterReducer";

import thunk from "redux-thunk";
import {reducerForAsyncActions} from "./store/reducerForAsyncActions";

// const rootReducer = combineReducers({
//     phonesData: reducer,
//     filterData: filterReducer
// });

const middlewares = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducerForAsyncActions, /* preloadedState, */
    composeEnhancers(middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);

