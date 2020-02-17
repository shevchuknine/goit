import React, {Component} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import styles from "./styles.scss";
import cssModulesStyles from "./styles.module.scss";


class TransitionRoot extends Component {
    state = {
        visible: false,
        items: []
    };

    onToggle = () => this.setState(ps => ({visible: !ps.visible}));

    render() {
        const {visible, items} = this.state;
        return (
            <div>
                {/*<CSSTransition in={visible}*/}
                               {/*timeout={2000}*/}
                               {/*classNames={cssModulesStyles}*/}
                               {/*unmountOnExit*/}
                {/*>*/}
                    {/*<div className={cssModulesStyles.test}>*/}
                        {/*text hello*/}
                    {/*</div>*/}
                {/*</CSSTransition>*/}
                {/*<button onClick={this.onToggle}>toggle</button>*/}
                <TransitionGroup>
                    {
                        items.map(item => {
                            return (
                                <CSSTransition/>
                            );
                        })
                    }
                </TransitionGroup>
            </div>
        );
    }
}

export default TransitionRoot;
