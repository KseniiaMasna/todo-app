import './ListTodos.css'
import React from "react"

export const ListTodos = (props) => {

    return (
        <fieldset className='todo-list'>
            {props.todoList.map(todoEntrie => (        
                <div className='todo-entrie' key={todoEntrie.id}>
                     <input type="checkbox" id={todoEntrie.id} name={todoEntrie.text} checked={todoEntrie.done} onChange={() => props.onClick(todoEntrie.id)}/>
                    <label htmlFor={todoEntrie.id}>{todoEntrie.text}</label>
                </div>
            ))}
        </fieldset>
    )
}