import React from "react"
import { TodoContext } from "../TodoContext"
import './TodoForm.css'

function TodoForm() {

    const [newTodoText, setNewTodoText] = React.useState('')

    const {
        addTodos, 
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    } 
    const onSubmit = (event) => {
        event.preventDefault()
        addTodos(newTodoText)
        setOpenModal(false)
    }
    const onChangeText = (event) => {
        setNewTodoText(event.target.value) 
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Ingresa tu nuevo TODO</label>
            <textarea 
                value={newTodoText}
                onChange={onChangeText}
                placeholder="Escribiendo aquí el TODO"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
            
        </form>
    )
}

export { TodoForm }