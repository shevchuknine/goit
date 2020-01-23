import React, {Fragment, useState} from 'react';

import Header from "../header/Header";
import Content from "../content/Content";

function Root () {

    const [page, setPage] = useState({
        value: "page_1"
    });

    return (
        <Fragment>
            <Header page={page}
                    setPage={setPage}
            ></Header>
            <Content page={page}></Content>
        </Fragment>
    );
}

export default Root;


