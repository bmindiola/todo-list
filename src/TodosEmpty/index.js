import React from "react"
import image from '../images/empty_todos.png'
import './TodosEmpty.css'

function TodosEmpty() {
    return (
        <div className="EmptyTodos">
            <p>Crea tu primer TODO</p>
            <img src={image} alt='TodoEmpty'/>
        </div>
    )
}

export { TodosEmpty }