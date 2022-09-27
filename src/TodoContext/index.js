import React from "react"
import { useLocalStorage } from "./useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length
    const searchValueLower = searchValue.toLowerCase()

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed 
        ? newTodos[todoIndex].completed = false
        : newTodos[todoIndex].completed = true

        saveTodos(newTodos)
    }

    const addTodos = (textNew) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text: textNew
        })
        saveTodos(newTodos)
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            todos,
            searchValueLower,
            completeTodos,
            deleteTodos,
            addTodos,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider}