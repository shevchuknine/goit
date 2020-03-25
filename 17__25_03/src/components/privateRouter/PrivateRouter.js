import React, {Component} from "react";
import {Route} from "react-router-dom";
import {tokenSelector} from "../../store/selectors";
import {connect} from "react-redux";

class PrivateRouter extends Component {
    render() {
        const {token, ...otherProps} = this.props;

        if (token) {
            return (
                <Route {...otherProps}/>
            );
        } else {
            return "You have no access to this page";
        }
    }
}

const mSTP = (state) => {
    return {
        token: tokenSelector(state)
    };
};

export default connect(mSTP)(PrivateRouter);
