import React, {Component} from "react";

class Input extends Component {
    onChange = (event) => {
        const {target: {value}} = event;

        this.props.onChange(value);
    };

    render() {
        const {value, type = "text"} = this.props;
        return (
            <input type={type} value={value} onChange={this.onChange}/>
        );
    }
}

export default Input;
