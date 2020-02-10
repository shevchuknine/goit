import React, {Component, lazy, Suspense} from "react";
import "./index.css";
import Loadable from "react-loadable";
import Loading from "./components/Loading";
//
// const InputAsync = Loadable({
//     loader: () => import("./components/Input" /* webpackChunkName: "input" */),
//     loading: Loading
// });

const InputAsync = lazy(() => import("./components/Input" /* webpackChunkName: "input" */));

class Root extends React.Component {
    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState(ps => ({error: true}))
    }

    render() {
        const {error} = this.state;
        return (
            <div>
                {
                    error ? (
                        "reload page, please"
                    ) : (
                        <Suspense fallback={<div>loading...</div>}>
                            <InputAsync/>
                        </Suspense>
                    )
                }
            </div>
        );
    }
}
export default Root;
