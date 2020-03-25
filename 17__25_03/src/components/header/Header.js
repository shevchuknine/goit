import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

import "./header.scss";
import fetch from "../../helpes/fetch";
import {tokenSelector} from "../../store/selectors";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        const {token} = this.props;
        return (
            <div className="header">
                <div>
                    <Link to={"/"}>Home</Link>
                    {
                        token && <Link to={"/personal"}>Personal</Link>
                    }
                </div>
                <div>
                    {
                        !token && (
                            <Fragment>
                                <Link to={"/registration"}>Registration</Link>
                                <Link to={"/authorization"}>Authorization</Link>
                            </Fragment>
                        )
                    }
                    {
                        token && <Link to={"/signout"}>Signout</Link>
                    }
                </div>
            </div>
        );
    }
}

const mSTP = state => {
    return {
        token: tokenSelector(state)
    };
};

export default connect(mSTP)(Header);
