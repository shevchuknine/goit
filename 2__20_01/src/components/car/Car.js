import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import styles from "./car.module.css";

// import styled from 'styled-components'

function Car(props) {
    console.log(props);
    const {name, year, color, engine, transmission, className} = props;



    return (
        <div className={cx(styles.car, className)}>
            <div className={styles["car-name"]}>Name: {name}</div>
            <div className={"car-year"}>Year: {year}</div>
            <div>Color: {color}</div>
            <div>Specs:</div>
            <ul>
                <li>Engine: {engine}</li>
                <li>Transmission: {transmission}</li>
            </ul>
        </div>
    );
}

// Car.defaultProps = {
//
// };
//
// Car.propTypes = {
//     name: PropTypes.string.isRequired,
//     year: PropTypes.number,
//     engine: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// };

export default Car;
