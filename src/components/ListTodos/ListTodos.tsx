import './ListTodos.css'
import React from "react"
import { IconCloseButton } from '../primitive ui/IconCloseButton'
import { Counter } from '../Counter/Counter'

export const ListTodos = (props) => {

    return (
        <fieldset className='todo-list'>
            {props.todoList.map(todoEntrie => (        
                <div className='todo-entrie' key={todoEntrie.id}>
                    <input type="checkbox" id={todoEntrie.id} name={todoEntrie.text} checked={todoEntrie.done} onChange={() => props.onChange(todoEntrie.id)}/>
                    <label htmlFor={todoEntrie.id}>{todoEntrie.text}</label>
                    <IconCloseButton onClick={() => props.onClick(todoEntrie.id)}/>
                </div>
            ))}
            <Counter amountOfDoneTodo={props.amountOfDoneTodo} totalAmountTodo={props.totalAmountTodo}/>
        </fieldset>
    )
}