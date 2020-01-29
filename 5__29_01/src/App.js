import React, {Component, Fragment} from "react";

import Counter from "./components/Counter";
import {Example} from "./components/Example";

//todo app
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import {runWithTimeout, shallowEqual} from "./helpers/htlper";

import uuid from "uuid";
import MemoryLeakExample from "./components/MemoryLeakExample";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            childsHaveError: false
        };

        this.initialData = [{id: 1, text: "test", active: true}];
    }

    add = () => {
        this.setState((ps) => {
            const {list} = ps;

            return (
                {
                    list: list.concat({
                        id: uuid(),
                        text: `example item`,
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (shallowEqual(this.state, nextState) && shallowEqual(this.props, nextProps)) {
            console.log("shouldComponentUpdate false");
            return false;
        } else {
            console.log("shouldComponentUpdate true");
            return true;
        }
    }

    componentDidCatch(error) {
        this.setState(ps => ({
            childsHaveError: true
        }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {list} = this.state;
        if (list !== prevState.list) {
            runWithTimeout(() => {
                localStorage.setItem("list", JSON.stringify(list));
            })
        }
    }

    componentDidMount() {
        const list = JSON.parse(localStorage.getItem("list")) || this.initialData;

        runWithTimeout(() => {
            this.setState(ps => ({
                list
            }));
        });
    }

    render () {
        console.log("render App");
        const {list, childsHaveError} = this.state;
        return (
            <div>
                {
                    childsHaveError ? "Упс, что-то пошло не так. Мы уже занимаемся" : (
                        <Fragment>
                            <Button text={"Добавить"}
                                    onClick={this.add}
                            />
                            <div>
                                {
                                    list.length > 0 ? (
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
                                    ) : (
                                        "Данных нет"
                                    )
                                }
                            </div>
                            {/*<MemoryLeakExample/>*/}
                        </Fragment>
                    )
                }
            </div>
        );
    }
}

export default App;
