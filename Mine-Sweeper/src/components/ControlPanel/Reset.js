import React from "react";
import "./ResetStyles.css";

function Reset(props) {
    let button = {
        init: "Start 😎",
        playing: "Playing... 😯",
        ended: "Loss 😵",
        won: "Won! 🥳",
    };
    return (
        <div className='control-panel__button-reset' onClick={props.callback}>
            {button[props.stage]}
        </div>
    );
}

export default Reset;
