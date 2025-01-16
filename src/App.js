import './App.css';
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';


const App = () => {

const [todos, setTodo] = useState([]);

const onToggle = (todo) => {
  setTodo(
    todos.map((obj) => (obj.id === todo.id ? {...obj,
    checked: !todo.checked} : obj))
  );
}

const onRemove = (todo) => {
  setTodo(todo.filter((obj) => obj.id !== todo.id));
}
  
const onNewTodo = (value) => {
  setTodo ([
    ...todos,
    {
      id:uuidv4(),
      tittle: value,
      checked: false
    }
  ])
}

  return(
    <section id='app' className='container'>
      <header>
        <h1 className='tittle'>To-Do</h1>
      </header>
      <section className='main'>
        <NewTodo onNewTodo={onNewTodo}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        
      </section>
    </section>
  );
}
export default App;
