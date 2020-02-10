import React, {Component} from "react";
import "./index.css";

import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from "react-router-dom";
import Market from "./components_for_dynamic_routing/Market";

class Root extends React.Component {
    state = {
        value: "test"
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*<Switch>*/}
                        {/*<Route path={"/contacts"} component={ContactsPage}/>*/}
                        {/*<Route path={"/help"} component={HelpPage}/>*/}
                        {/*<Route path={"/"} exact render={(props) => <MainPage {...props} value={this.state.value}/>}/>*/}
                        {/*<Route path={"/not_found"} component={NotFoundPage}/>*/}
                        {/*<Redirect from={"*"} to={"not_found"}/>*/}
                    {/*</Switch>*/}
                    <Switch>
                        <Route path={"/market"} component={Market}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const MainPage = (props) => {
    console.log(props);
    return (
        <div>
            Main page
            <NavLink activeClassName={"active"} to={"/contacts"}>Contacts</NavLink>
            <br/>
            <NavLink activeClassName={"active"} to={"/help"}>Help</NavLink>
        </div>
    );
};

class ContactsPage extends Component {
    componentDidMount() {
        const {history} = this.props;
        setTimeout(() => {
            // history.replace("/help", {from: "/contacts"});
            history.go(-2);
        }, 2000);
    }

    render() {
        return (
            <div>
                Contacts
                <NavLink activeClassName={"active"} to={"/contacts"}>Contacts</NavLink>
                <br/>
                <NavLink activeClassName={"active"} to={"/help"}>Help</NavLink>
            </div>
        );
    }
};

const HelpPage = (props) => {
    console.log(props);
    return (
        <div>
            Help
            <NavLink activeClassName={"active"} to={"/contacts"}>Contacts</NavLink>
            <br/>
            <NavLink activeClassName={"active"} to={"/help"}>Help</NavLink>
        </div>
    );
};

const NotFoundPage = () => {
    return (
        <div>
            Not found
        </div>
    );
};

export default Root;
