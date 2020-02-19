import React, {Component, lazy, Suspense} from "react";
import Input from "./masks/Input"
import {formatPhone} from "./masks/helper";

class Root extends Component {
    state = {
        value: ""
    };

    onChange = (value) => {
        this.setState(ps => ({value}))
    };

    render() {
        const {value} = this.state;
        return (
            <div>
                <div>masked: {formatPhone(value)}</div>
                <Input value={value} onChange={this.onChange}/>
            </div>
        );
    }
}

export default Root;



