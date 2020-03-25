import React, {Component} from "react";
import Input from "../input/Input";
import Button from "../button/Button";

import fetch from "../../helpes/fetch";

class Registration extends Component {
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
            fetch("/api/registration", {
                method: "POST",
                body: {
                    login, password
                }
            }).then(result => {
                const {success, error} = result;

                if (success) {
                    this.props.history.push("/authorization");
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
                Registration page
                {error}
                <div>
                    Login:
                    <Input value={login} onChange={this.onChangeLogin}/>
                </div>
                <div>
                    Password:
                    <Input type={"password"} value={password} onChange={this.onChangePassword}/>
                </div>
                <Button text={"Registration"} onClick={this.onClick}/>
            </div>
        );
    }
}

export default Registration;
