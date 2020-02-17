import React, {Component} from "react";

class Validation extends Component {
    state = {
        isValid: true
    };

    componentDidMount() {
        this.validator();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.value !== prevProps.value) {
            this.validator();
        }
    }

    validator = () => {
        const {value, validationRule, onValidate} = this.props;

        this.setState(ps => {
            return {
                isValid: validationRule(value)
            };
        }, () => {
            const {isValid} = this.state;

            onValidate && onValidate(isValid);
        });
    };

    render() {
        const {validationRule, onValidate, children, ...otherProps} = this.props,
            {isValid} = this.state;
        return (
            <div>
                {
                    children({...otherProps})
                }
                {isValid ? null : "not a valid"}
            </div>
        );
    }
}

export default Validation;
