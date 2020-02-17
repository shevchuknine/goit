import React, {Component, createContext} from "react";
import Page from "./Page";

const {Provider, Consumer} = createContext();
export const ThemeConsumer = Consumer;

class RootPage extends Component {
    state = {
        theme: "light"
    };

    changeTheme = () => this.setState(ps => ({
        theme: ps.theme === "light" ? "dark" : "light"
    }))

    render() {
        const {theme} = this.state;
        return (
            <div>
                <Provider value={theme}>
                    <Page/>
                </Provider>
                <div onClick={this.changeTheme}>change theme</div>
            </div>
        );
    }
}

export default RootPage;
