import { nanoid } from 'nanoid'
import './AddTodoForm.css'
import React from "react"
import { useState } from "react"

interface TodoEntrie {
    readonly id: string
    text: string
    done: boolean
}

const exampleTodoList: TodoEntrie[] = [
    {
      id: nanoid(),
      text: "Buy groceries",
      done: false
    },
    {
      id: nanoid(),
      text: "Read a book",
      done: true
    },
    {
      id: nanoid(),
      text: "Write some code",
      done: false
    }
  ];


export const AddTodoForm = () => {
    const [todoList, setTodoList] = useState<TodoEntrie[]>(exampleTodoList)

    const addTodo = (formData) => {
        const newTodo:TodoEntrie = {
            id: nanoid(), 
            text: formData.get('todo'),
            done: false
        }
        setTodoList(prevTodoList => [...prevTodoList, newTodo])
    }

    const toggleCheckBox = (id: string) => {
        setTodoList(prevTodoList => prevTodoList.map(todo => 
            todo.id === id 
                ? {...todo, done: !todo.done}
                : todo
        ))
    }

    const todoListEntries = todoList.map(todoEntrie => (        
        <div className='todo-entrie' key={todoEntrie.id}>
            <input type="checkbox" id={todoEntrie.id} name={todoEntrie.text} checked={todoEntrie.done} onClick={() => toggleCheckBox(todoEntrie.id)}/>
            <label htmlFor={todoEntrie.id}>{todoEntrie.text}</label>
        </div>
    ))

    return (
        <main>
            <form action={addTodo}>
                <input 
                    type="text" 
                    name="todo"
                    required
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