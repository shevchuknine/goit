import React, {Component} from "react";
import Test from "./render_props_components/Text";
import TestFunc from "./render_props_components/TestFunc";

class Example extends Component {
    render() {
        return (
            <TestFunc>
                {
                    (value) => {
                        return (
                            <div>

                            </div>
                        )
                    }
                }
            </TestFunc>
        );
    }
}

export default Example;
