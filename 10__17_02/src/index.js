import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Root from "./Root";
import Example from "./Example";
import RootPage from "./context/RootPage";
import TransitionRoot from "./transitions/TransitionRoot";

// ReactDOM.render(<Root />, document.getElementById('root'));
// ReactDOM.render(<Example />, document.getElementById('root'));
// ReactDOM.render(<RootPage />, document.getElementById('root'));
ReactDOM.render(<TransitionRoot />, document.getElementById('root'));

