import React from "react";

function Content(props) {

    const {page} = props;
    const {value} = page;

    return (
        value === "page_1" ? (
            <p>
                Hello, this is page 1
            </p>
        ) : (
            value === "page_2" ? (
                <div>
                    Hello, this is page 2
                </div>
            ) : (
                value === "page_3" ? (
                    <span>
                        Hello, this is page 3
                    </span>
                ) : (
                    "Такой страницы нет"
                )
            )
        )
    );
}

export default Content;
