import React from "react"
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoItem } from '../TodoItem/index';
import { TodoList } from '../TodoList/index';
import { TodoButton } from '../TodoButton/index';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    todos,
    searchValueLower,
    completeTodos,
    deleteTodos, 
    loading,
    error
}) {
    return(
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {error && <p>Desesperate, hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !setSearchValue) && <p>¡Crea tu primer TODO!</p>}
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

      <TodoButton />
    </React.Fragment>
    )
}

export { AppUI }