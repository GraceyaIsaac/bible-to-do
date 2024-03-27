import React,{useState}from 'react'

export const EditTodoForm = ({ editTodo, task ,editTask }) => {

    const[value,setValue]=useState(task.task)


    const handleSubmit=e=>{
        e.preventDefault()
        editTodo (value, task.id)
        setValue('')
    }
    return (
        <form className='TodoForm'onSubmit={handleSubmit}>
        <input
        type='text'
        className='todo-update'
        placeholder='Update Task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
    <button type='submit' className='todo-update'>
        Update the Chapter
    </button>
</form>
      )
    }