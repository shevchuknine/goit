import React from "react";

function Header(props) {

    const {page, setPage} = props;
    const {value} = page;

    console.log(props);

    return (
        <div className={"header"}>
            <div onClick={() => setPage({value: "page_1"})}>Page 1 {value === "page_1" ? "active" : ""}</div>
            <div onClick={() => setPage({value: "page_2"})}>Page 2 {value === "page_2" ? "active" : ""}</div>
            <div onClick={() => setPage({value: "page_3"})}>Page 3 {value === "page_3" ? "active" : ""}</div>
        </div>
    );
}

export default Header;
