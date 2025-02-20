import { nanoid } from 'nanoid'
import React from 'react'
import { useState } from 'react'
import './App.css'
import { Heading } from './components/Heading/Heading'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'
import { ListTodos } from './components/ListTodos/ListTodos'

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

function App() {
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

  return (
    <>
      <Heading appName="To Do.."/>
      <main>
        <AddTodoForm addTodo={addTodo}/>
        {
            todoList.length > 0 && <ListTodos todoList={todoList} onClick={toggleCheckBox}/>
        }
      </main>

    </>
  )
}

export default App
