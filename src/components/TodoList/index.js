import React from 'react'
import PropTypes from 'prop-types';

import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ todos, onToggle, onRemove }) => {

    return (
    <ul className='todo-list'>
        {todos.map((todo) => (
            <li key={todo.id.toString()}>
                <span  
                  className={`todo ${todo.checked ? 'checked' : ''}`}
                  onClick={() => onToggle && onToggle(todo)}
                  role='button'
                >{todo.tittle}</span>
                    <button className='remove' 
                    type='button'
                    onClick={() => onRemove && onRemove(todo)}
                    ><MdDeleteForever size={28}/></button>
            </li>
        ))}
    </ul>
  )
};
TodoList.proTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            tittle: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired
        }).isRequired,
    ),
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
export default TodoList;
