import React, {Component} from "react";
import fetch from "../../helpes/fetch";
import {tokenSelector} from "../../store/selectors";
import {connect} from "react-redux";
import {setTokenAction} from "../../store/action";

class Signout extends Component {
    componentDidMount() {
        const {token} = this.props;
        fetch("/api/signout", {
            method: "POST",
            body: {
                token
            }
        }).then((response) => {
            const {success} = response;
            if (success) {
                this.props.setToken();
                this.props.history.replace("/");
            }
        });
    }

    render() {
        return (
            <div>Sign out in progress</div>
        );
    }
}


const mSTP = state => {
    return {
        token: tokenSelector(state)
    };
};

const mDTP = dispatch => {
    return {
        setToken: () => dispatch(setTokenAction(undefined))
    };
};

export default connect(mSTP, mDTP)(Signout);
