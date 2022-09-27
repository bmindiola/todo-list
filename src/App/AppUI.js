import React from "react"
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoItem } from '../TodoItem/index';
import { TodoList } from '../TodoList/index';
import { TodoButton } from '../TodoButton/index';
import { TodoContext } from '../TodoContext/index'
import { Modal } from '../Modal/index'
import { TodoForm } from '../TodoForm/index'
import { TodosError } from '../TodosError/index'
import { TodosLoading } from '../TodosLoading/index'
import { TodosEmpty } from '../TodosEmpty/index'

function AppUI() {
  const {error, loading, todos, 
    searchValueLower, completeTodos, deleteTodos,
    openModal, setOpenModal
  } = React.useContext(TodoContext)
  return(
  <React.Fragment>
    <TodoCounter />

    <TodoSearch />

    <TodoList>
      {error && <TodosError />}
      {loading && <TodosLoading />}
      {(!loading && !todos.length) && <TodosEmpty />}
      {todos.flatMap(todo => 
      todo.text.toLowerCase().indexOf(searchValueLower) !== -1
      &&
      <TodoItem 
      key={todo.text} 
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodos(todo.text)}
      onDelete={() => deleteTodos(todo.text)}
      />
      )}
    </TodoList>
    
    { !!openModal && (
      <Modal>
        <TodoForm></TodoForm>
      </Modal>
    )}
    

    <TodoButton 
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  </React.Fragment>
  )
}

export { AppUI }