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
        <li key={todoEntrie.id}>{todoEntrie.text}</li>
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
            <ul>
                {todoListEntries}
            </ul>
        </main>

    )
}