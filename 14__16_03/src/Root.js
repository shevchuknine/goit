import React from "react";
import {connect} from "react-redux";

import styles from "./Root.module.scss";
import "./index.css";

import {changeFilterAction, changeCheckedAction, setPhonesAction} from "./store/action";


class Root extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.changeFilterAction("htc");
            // this.props.setPhonesAction();
            // this.props.changeCheckedAction();
        }, 1000);

        setTimeout(() => {
            this.props.changeFilterAction("apple");
        }, 3000);


    }

    render() {
        return (
            <div className={styles.wrapper}>
                hello
            </div>
        );
    }
}

const mDTP = dispatch => {
    return {
        changeFilterAction: (filter) => dispatch(changeFilterAction(filter)),
        setPhonesAction: () => dispatch(setPhonesAction([])),
        changeCheckedAction: () => dispatch(changeCheckedAction("id")),
    };
};

export default connect(null, mDTP)(Root);
