import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    
  
    return (
      <div className='Todo'>
        {/* Use a list item here */}
        <ul>
          <li className='Todos'>
            <input 
              type="checkbox"
              onChange={()=>toggleComplete(task.id)}     
              checked={task.completed}
            />
            {/* Place the task text inside the label for better accessibility */}
            <label 
                style={{ textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.5 : 1 }} 
            onDoubleClick={()=>toggleComplete(task.id)}>{task.task}</label>

          </li>
        </ul>
        <div className='todo-icons'>
          <FontAwesomeIcon className='todo-edit' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon className='todo-delete' icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    );
  };