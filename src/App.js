import './App.css';
import React, {useState} from 'react';
import { MdDeleteForever } from "react-icons/md";
import {v4 as uuidv4} from 'uuid';

const App = () => {
  
  const [value, setValue] = useState("");
  
  const [lists, setLists] = useState([]);
  
  const ESCAPE_KEY = 27;
  
  const ENTER_KEY = 13;
  
  const onChange = (event) => {
    setValue(event.target.value);
  }
  
  const erase = () => {
    setValue("");
  }
  
  const submit = () => {
    setLists ([
      ...lists,
      {
        id:uuidv4(),
        tittle: value,
        checked: false
      }
    ])
  
    erase();

  }
  const onKeyDown = (event) => {
    if(event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY){
      erase();
    }
  }
  
const onToggle = (list) => {
  setLists(
    lists.map((obj) => (obj.id === list.id ? {...obj,
    checked: !list.checked} : obj))
  );
}

const onRemove = (list) => {
  setLists(lists.filter((obj) => obj.id !== list.id));
}

  return(
    <section id='app' className='container'>
      <header>
        <h1 className='tittle'>To-Do</h1>
      </header>
      <section className='main'>
        <input className='new-todo' 
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown} />
        <ul className='todo-list'>
          {lists.map((list) => (
              <li key={list.id.toString()}>
                <span  
                  className={`todo ${list.checked ? 'checked' : ''}`}
                  onClick={() => onToggle(list)}
                  role='button'
                >{list.tittle}</span>
                <button className='remove' 
                  type='button'
                  onClick={() => onRemove(list)}
                ><MdDeleteForever size={28}/></button>
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
}
export default App;
