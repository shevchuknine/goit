import React, {Component} from "react";
import fetch from "../../helpes/fetch";
import {tokenSelector} from "../../store/selectors";
import {connect} from "react-redux";

class Personal extends Component {
    state = {
        login: undefined
    };

    componentDidMount() {
        const {token} = this.props;
        fetch("/api/data", {
            headers: {
                token
            }
        }).then(response => {
            const {success, result} = response;

            if (success) {
                const {data} = result;
                this.setState(ps => ({login: data}))
            } else {
                this.props.history.replace("/authorization");
            }
        });
    }

    render() {
        const {login} = this.state;
        return (
            <div>my username: {login}</div>
        );
    }
}

const mSTP = state => {
    return {
        token :tokenSelector(state)
    };
};

export default connect(mSTP)(Personal);
