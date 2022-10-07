import React from "react";

function Buttons(props) {

    return (
        <div>
            <p><img src={props.img} />{props.title}</p>
        </div>
    );
}

export default Buttons;
