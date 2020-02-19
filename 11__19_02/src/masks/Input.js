import React, {Component, lazy, Suspense} from "react";

class Input extends Component {
    onChange = (event) => {
        const {target: {value}} = event;
        const {onChange} = this.props;

        onChange(this.cleanFromMask(value));
    };

    cleanFromMask = (value) => {
        return value.split("").filter(symbol => symbol !== "-").join("").slice(0, 7);
    };

    applyMask = (value) => {
        const first = value.slice(0, 3);
        const second = value.slice(3, 5);
        const third = value.slice(5, 7);

        return `${first}${second.length > 0 ? `-${second}` : ""}${third.length > 0 ? `-${third}` : ""}`;
    };

    render() {
        const {value, onChange} = this.props;
        return (
            <input value={this.applyMask(value)} onChange={this.onChange}/>
        );
    }
}

export default Input;

class RenderProp extends Component {
    state = {
        value: "465"
    };

    render() {
        const {children} = this.props, {value} = this.state;

        return (
            <div>{children({value, onChange, onValidate})}</div>
        );
    }
}

class QWE extends Component {
    render() {
        <RenderProp>
            {
                (otherProps) => <Input {...otherProps}/>
            }
        </RenderProp>
    }
}



