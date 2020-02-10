import React from "react";

const Loading = (props) => {
    const {error, timedOut, retry} = props;

    if (error || timedOut) {
        setTimeout(retry , 1000);
    }

    if (error) {
        return <div>we have an erro</div>
    }

    return (
        <div>loading..</div>
    );
};

export default Loading;
