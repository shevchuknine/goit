import React, {Component} from "react";
import Input from "../input/Input";
import Button from "../button/Button";

import fetch from "../../helpes/fetch";
import {setTokenAction} from "../../store/action";
import {connect} from "react-redux";

class Authorization extends Component {
    state = {
        error: undefined,
        login: "",
        password: ""
    };

    onChangeLogin = (login) => this.setState(ps => ({login}));
    onChangePassword = (password) => this.setState(ps => ({password}));

    onClick = () => {
        this.setState({error: undefined}, () => {
            const {login, password} = this.state;
            fetch("/api/signin", {
                method: "POST",
                body: {
                    login, password
                }
            }).then(response => {
                const {success, error, result} = response;

                if (success) {
                    this.props.setToken(result.token);
                    this.props.history.push("/");
                } else {
                    this.setState({error});
                }
            });
        });
    };

    render() {
        const {login, password, error} = this.state;
        return (
            <div>
                <p>Authorization page</p>
                {error}
                <div>
                    Login:
                    <Input value={login} onChange={this.onChangeLogin}/>
                </div>
                <div>
                    Password:
                    <Input type={"password"} value={password} onChange={this.onChangePassword}/>
                </div>
                <Button text={"Authorization"} onClick={this.onClick}/>
            </div>
        );
    }
}

const mDTP = dispatch => {
    return {
        setToken: (token) => dispatch(setTokenAction(token))
    };
};

export default connect(null, mDTP)(Authorization);
