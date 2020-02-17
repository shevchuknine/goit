import React, {Component} from "react";

class TestFunc extends Component {
    state = {
        value: "test value"
    };

    componentDidMount() {
        console.log("test func");
    }

    render() {
        const {children} = this.props;
        const {value} = this.state;
        return (
            <div>
                <input/>
                <span>{children(value)}</span>
            </div>
        );
    }
}

export default TestFunc;
