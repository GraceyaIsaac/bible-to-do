import React,{useState,useEffect} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { Search } from './Search';
uuidv4();

export const WrapTodo = () => {
    const[todos,setTodos]=useState([])
    const[search,setSearch]=useState('')

    useEffect(() => {
        const storedTodos = localStorage.getItem("bibleTodo");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const addTodo = todo => {
         const newTodo= { id: uuidv4(), task: todo, completed: false, isEditing: false}
         const updatedTodos = [...todos, newTodo];
         setTodos(updatedTodos);
         localStorage.setItem("bibleTodo", JSON.stringify(updatedTodos));
            }
    const toggleComplete= (id)=>{
         const updatedTodos=todos.map((todo)=>todo.id===id?{ ...todo, completed: !todo.completed }:todo)
         setTodos(updatedTodos)
         localStorage.setItem("bibleTodo",JSON.stringify(updatedTodos))
    }

    const deleteTodo=(id)=>{
        const updatedTodos=todos.filter((todo)=>todo.id!==id)
        setTodos(updatedTodos);
        localStorage.setItem("bibleTodo", JSON.stringify(updatedTodos));
    }

    const editTodo = (id) => {
        const updatedTodos=
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, isEditing: !todo.isEditing }
                    : todo
            );
            setTodos(updatedTodos);
        localStorage.setItem("bibleTodo",JSON.stringify(updatedTodos))
    };

    const editTask=(task,id)=>{
        const updatedTodos=
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, task,isEditing: !todo.isEditing }
                    : todo
            );
            setTodos(updatedTodos);
        localStorage.setItem("bibleTodo",JSON.stringify(updatedTodos))
    }
  return (
    <div className='TodoWrapper'>
    <h1>Get things Done!</h1>
    <TodoForm 
         addTodo={addTodo} />
    <Search 
        search={search} 
        setSearch={setSearch} />
    {/* to add as list when we enter the value*/}
    {todos
        .filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()))
        .map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm key={index} task={todo} editTodo={editTask} />
          ) : (
            <Todo
              key={index}
              task={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
    </div>
  )
}
