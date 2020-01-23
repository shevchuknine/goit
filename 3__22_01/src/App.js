import React, {Component} from "react";

import Counter from "./components/Counter";
import {Example} from "./components/Example";

//todo app
import ListItem from "./components/ListItem";
import Button from "./components/Button";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [{
                text: "example item 0",
                active: true
            }]
        };
    }

    add = () => {


        // так делать нельзя!
        // const {list} = this.state;
        // list.push({
        //     text: `example item ${list.length}`,
        //     active: Math.random() > 0.5
        // });

        this.setState((ps) => {
            const {list} = ps;

            return (
                {
                    list: list.concat({
                        text: `example item ${Math.random()}`,
                        active: Math.random() > 0.5
                    })
                }
            );
        });
    };

    remove = (indexToDelete) => {
        this.setState((ps) => {
            const {list} = ps;

            return {
                list: list.filter((i, index) => index !== indexToDelete)
            };
        })
    };

    render () {
        const {list} = this.state;
        return (
            <div>
                <Button text={"Добавить"}
                        onClick={this.add}
                />
                <div>
                    {
                        list.map((item, index) => {
                            return (
                                <ListItem key={index}
                                          index={index}
                                          text={item.text}
                                          active={item.active}
                                          onClick={() => this.remove(index)}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
