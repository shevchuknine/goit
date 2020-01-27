import React, {Component} from "react";

import Counter from "./components/Counter";
import {Example} from "./components/Example";

//todo app
import ListItem from "./components/ListItem";
import Button from "./components/Button";

let count = 1;

class App extends React.PureComponent {
    state = {
        name: "",
        age: "",
        city: "",
        bool: false,
        test_value: "",
        select_test: ["3"],

        example: {
            value: "",
            isValid: true
        },

        value: "test",
        valueIsValid: false,

    };
    //
    // onChangeName = (event) => {
    //     const {target: {value}} = event;
    //
    //     this.setState(ps => ({name: value}))
    // };
    //
    // onChangeAge = (event) => {
    //     const {target: {value}} = event;
    //
    //     this.setState(ps => ({age: value}))
    // };
    //
    // onChangeCity = (event) => {
    //     const {target: {value}} = event;
    //
    //     this.setState(ps => ({city: value}))
    // };

    onChangeBool = (event) => {
        this.setState(ps => ({
            bool: !ps.bool
        }))
    };

    universalHandler = (event) => {
        event.persist();

        console.log(event);


        const {target: {name, value}} = event;

        this.setState(ps => ({
            [name]: value
        }))
    };

    onMultipleSelect = (event) => {
        event.persist();
        // console.log(event);
        const {target: {selectedOptions}} = event;

        const clonedSelectedOptions = Array.from(selectedOptions).slice(0);

        console.log(clonedSelectedOptions);

        this.setState(ps => ({
            select_test: clonedSelectedOptions
        }))
    };

    moreThan5 = (valueToTest) => {
        // return /\d/g.test(valueToTest);
        //
        // return valueToTest.split("").reduce((res, symbol) => {
        //     return res || !isNaN(+symbol)
        // }, false);

        return valueToTest.length > 5;
    };

    onValueChange = ({target: {value}}) => {

        const valueMoreThan5 = this.moreThan5(value);

        this.setState(ps => ({
            valueIsValid: valueMoreThan5,
            value
        }));
    }

    render() {
        const {bool, name, age, city, test_value, select_test, value, valueIsValid} = this.state;
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <input value={name} name={"name"} onChange={this.universalHandler}/>
                <input value={age}  name={"age"} onChange={this.universalHandler}/>
                <input value={city}  name={"city"} onChange={this.universalHandler}/>
                <input type={"checkbox"} checked={bool} onChange={this.onChangeBool}/>
                Uncontrolled
                <input/>
                Form
                <form>
                    <input value={test_value} name={"test_value"} onChange={this.universalHandler}/>
                </form>
                Dropdown
                <select value={select_test} multiple={"multiple"} name="select_test" onChange={this.onMultipleSelect}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                </select>

                Validation (is valid: {valueIsValid.toString()})
                <input value={value} onChange={this.onValueChange}/>
                <button disabled={!valueIsValid}>Button</button>
            </div>
        );
    }
}

export default App;
