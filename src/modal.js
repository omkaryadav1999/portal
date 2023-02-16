import React from "react";
import ReactDOM from "react-dom"

function Modal() {
    return (
        ReactDOM.createPortal(
            <h1>this is the modal component</h1>,
            document.getElementById("modal-root")
        )
    )
}

export default Modal