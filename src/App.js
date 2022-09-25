// import './App.css';
import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoButton } from './TodoButton';

const defaultTodos = [
  { text: 'Estudiar 1', completed: true },
  { text: 'Estudiar 2', completed: false },
  { text: 'Estudiar 3', completed: false },
  { text: 'Estudiar 4', completed: false },
]

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length
  const searchValueLower = searchValue.toLowerCase()
  return (
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
        {todos.flatMap(todo => 
        todo.text.toLowerCase().indexOf(searchValueLower) !== -1
        &&
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        )}
      </TodoList>

      <TodoButton />
    </React.Fragment>
  );
}

export default App;
