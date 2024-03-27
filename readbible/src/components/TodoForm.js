import React,{useState}from 'react'

export const TodoForm = ({addTodo}) => {

    const[value,setValue]=useState("")


    const handleSubmit=e=>{
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
  return (
    <form className='TodoForm'onSubmit={handleSubmit}>
    <input type='text' className='todo-input' placeholder='what are you going to read today?' required
    value={value}
    onChange={(e)=>setValue(e.target.value)}></input>
    <button type='submit' className='todo-btn'>Add the Chapter</button>
    </form>
  )
}
