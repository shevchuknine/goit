import React from 'react';
import ReactDOM from 'react-dom';

import Root from "./Root";
import {Provider} from "react-redux";

import {createStore, compose} from "redux";
import {reducer} from "./store/reducer";




ReactDOM.render(
    React.createElement(Root),
    document.getElementById('root')
);

