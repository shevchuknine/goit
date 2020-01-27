import React, {Component} from "react";

import Counter from "./components/Counter";
import {Example} from "./components/Example";

//todo app
import ListItem from "./components/ListItem";
import Button from "./components/Button";

let count = 1;

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            list: [{
                id: 1,
                text: "example item 1",
                active: true
            }]
        };
    }

    add = () => {
        console.log("add");

        count++;

        // так делать нельзя!
        // const {list} = this.state;
        // list.push({
        //     text: `example item ${list.length}`,
        //     active: Math.random() > 0.5
        // });

        // const {list} = this.state;
        //
        // list.push({
        //     id: count,
        //     text: `example item ${count}`,
        //     active: Math.random() > 0.5
        // });
        //
        // this.setState(ps => ({list}));

        this.setState((ps) => {
            const {list} = ps;

            return (
                {
                    list: list.concat({
                        id: count,
                        text: `example item ${count}`,
                        active: Math.random() > 0.5
                    })
                }
            );
        });
    };

    remove = (idToDelete) => {
        this.setState((ps) => {
            const {list} = ps;

            return {
                list: list.filter((item) => item.id !== idToDelete)
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
                        list.map((item) => {
                            return (
                                <ListItem key={item.id}
                                          id={item.id}
                                          text={item.text}
                                          active={item.active}
                                          remove={this.remove}
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
