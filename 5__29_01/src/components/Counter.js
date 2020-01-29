import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super();

        this.state = {
            value: 0,
            test: "test_1",
            example: true
        };

        this.onClickPlus = this.onClickPlus.bind(this);
    }

    onClickMinus = () => {
        const {value} = this.state;

        this.setState((previousState) => {
            return {
                value: previousState.value - 1
            };
        }, () => {
            const {value : newValue} = this.state;

            console.log("user changed value from", value, "to", newValue);
        });
    };

    onClickPlus() {
        const {value} = this.state;

        this.setState({
            value: value + 1
        }, () => {
            const {value} = this.state;

            console.log("user changed value to", value);
        });
    };

    render () {
        const {value} = this.state;
        return (
            <div>
                <button onClick={this.onClickMinus}>-</button>
                <div>{value}</div>
                <button onClick={this.onClickPlus}>+</button>
            </div>
        );
    }
}

export default Counter;
