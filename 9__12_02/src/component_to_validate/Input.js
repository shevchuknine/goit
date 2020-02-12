import React, {Component} from "react";
import withValidation from "./withValidation";

class Input extends Component {
    onChange = (event) => {
        const {target: {value}} = event;
        const {onChange} = this.props;

        onChange(value);
    };

    render() {
        const {value} = this.props;
        return (
            <input value={value} onChange={this.onChange}/>
        );
    }
};

export default withValidation(Input);

