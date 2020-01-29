import React from "react";

export class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    method() {
        for (let i = 0; i < 5; i++) {
            const {value} = this.state;

            // this.setState({
            //     value: value + 1
            // });

            // {value: 0 + 1}, {value: 0 + 1}, {value: 0 + 1}, {value: 0 + 1}, {value: 0 + 1}


            // рекомендуется использовать вот так

            this.setState((previousState) => {
                return {
                    value: previousState.value + 1
                };
            });

            // {value: 0 + 1}, {value: 1 + 1}, {value: 2 + 1}, {value: 3 + 1}, {value: 4 + 1}

        }
    }

    componentDidMount() {
        this.method();
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                example: {value}
            </div>
        );
    }
}
