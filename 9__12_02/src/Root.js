import React, {Component, lazy, Suspense} from "react";
import "./index.css";

// import Input from "./components/Input";
// import List from "./components/List";

// example to HOC-s
// class Root extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Input test={"test"} value={"Asdasd"}/>
//                 <List/>
//             </div>
//         );
//     }
// }

// validation example
import Input from "./component_to_validate/Input";

class Root extends Component {
    state = {
        name: {
            value: "name",
            isValid: undefined
        },
        age: {
            value: "123",
            isValid: undefined
        }
    };

    onChange = (fieldName, value) => {
        this.setState(ps => {
            return {
                [fieldName]: {
                    ...ps[fieldName],
                    value
                }
            };
        })
    };

    onChangeName = (value) => this.onChange("name", value);
    onChangeAge = (value) => this.onChange("age", value);

    onValidate = (fieldName, resultOfValidation) => {
        this.setState(ps => (
            {
                [fieldName]: {
                    ...ps[fieldName],
                    isValid: resultOfValidation
                }
            }
        ));
    };

    onValidateName = (value) => this.onValidate("nameIsValid", value);
    onValidateAge = (value) => this.onValidate("ageIsValid", value);

    render() {
        const {name, age} = this.state;
        const formIsValid = !Object.values(this.state)
            .find(item => {
                return item.isValid === false;
            });

        return (
            <div>
                <div>
                    <Input value={name.value}
                           onChange={this.onChangeName}
                           validationRule={hasDigits}
                           onValidate={this.onValidateName}
                    />
                </div>
                <div>
                    <Input value={age.value}
                           onChange={this.onChangeAge}
                           validationRule={hasLetters}
                           onValidate={this.onValidateAge}
                    />
                </div>
                <button disabled={!formIsValid}>
                    {formIsValid ? "Submit" : "Disabled"}
                </button>
            </div>
        );
    }
}

const hasDigits = (value) => {
    return value.split("").reduce((res, letter) => {
        return res && isNaN(+letter)
    }, true);
};

const hasLetters = (value) => {
    return !isNaN(value);
};

export default Root;



