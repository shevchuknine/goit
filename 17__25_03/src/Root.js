import React from "react";

import styles from "./Root.module.scss";
import "./index.css";

import fetch from "./helpes/fetch";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Registration from "./components/registration/Registration";
import Authorization from "./components/authorization/Authorization";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Signout from "./components/signout/Signout";
import Personal from "./components/personal/Personal";
import PrivateRouter from "./components/privateRouter/PrivateRouter";


class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <PrivateRouter path={"/personal"} component={Personal}/>
                    <Route path={"/registration"} component={Registration}/>
                    <Route path={"/authorization"} component={Authorization}/>
                    <PrivateRouter path={"/signout"} component={Signout}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Root;
