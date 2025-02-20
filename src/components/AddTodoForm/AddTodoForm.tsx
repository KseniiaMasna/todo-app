import { nanoid } from 'nanoid'
import './AddTodoForm.css'
import React from "react"
import { useState } from "react"

interface TodoEntrie {
    readonly id: string
    text: string
}


export const AddTodoForm = () => {
    const [todoList, setTodoList] = useState<TodoEntrie[]>([])

    const addTodo = (formData) => {
        const newTodo:TodoEntrie = {
            id: nanoid(),
            text: formData.get('todo')
        }
        setTodoList(prevTodoList => [...prevTodoList, newTodo])
    }

    const todoListEntries = todoList.map(todoEntrie => (
        // <li key={todoEntrie.id}>{todoEntrie.text}</li>
        <div className='todo-entrie'>
            <input type="checkbox" id={todoEntrie.id} name={todoEntrie.text} />
            <label for={todoEntrie.id}>{todoEntrie.text}</label>
        </div>
    ))

    return (
        <main>
            <form action={addTodo}>
                <input 
                    type="text" 
                    name="todo"
                />
                <button type="submit">Add</button>
            </form>
            {
                todoList.length > 0 &&
                <fieldset className='todo-list'>
                    {todoListEntries}
                </fieldset>
            }
        </main>
    )
}