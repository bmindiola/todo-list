import React from "react";
import './TodoButton.css'

function TodoButton({ setOpenModal }) {

    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
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