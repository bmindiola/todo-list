import React from "react";
import './TodoButton.css'


function TodoButton() {

    const onClickButton = () => {
        alert('Modal')
    }

    return (
        <button 
            className="TodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}


export { TodoButton }