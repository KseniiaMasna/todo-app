import { nanoid } from 'nanoid'
import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { Heading } from './components/Heading/Heading'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'
import { ListTodos } from './components/ListTodos/ListTodos'


interface TodoEntrie {
    readonly id: string
    text: string
    done: boolean
}

function App() {
  const [todoList, setTodoList] = useState<TodoEntrie[]>([])

  //Load all todos from localStorage
  useEffect(() => {    
    const data = localStorage.getItem("todos")
    if (data){
      const todoListFromStorage: TodoEntrie[] = JSON.parse(data)      
      setTodoList(todoListFromStorage)
    }    
  }, [])

  const addTodo = (formData: FormData) => {
    const newTodo:TodoEntrie = {
        id: nanoid(), 
        text: formData.get('todo') as string,
        done: false
    }
    setTodoList(prevTodoList => {
      const updatedList = [...prevTodoList, newTodo]
      localStorage.setItem("todos", JSON.stringify(updatedList))
      return updatedList
    })
  }

  const toggleCheckBox = (id: string) => {
      setTodoList(prevTodoList => {
        const updatedList = prevTodoList.map(todo => 
          todo.id === id 
              ? {...todo, done: !todo.done}
              : todo
        )
        localStorage.setItem("todos", JSON.stringify(updatedList))
        return updatedList
      }
    )
  }

  const deleteTodo = (id: string) => {
    setTodoList(prevTodoList => {
      const index = prevTodoList.findIndex(todo => todo.id === id)
      let updatedList
      if (index !== -1) {
        updatedList = [...prevTodoList.slice(0, index), ...prevTodoList.slice(index + 1)]
      } else {
        updatedList = prevTodoList
      }
      localStorage.setItem("todos", JSON.stringify(updatedList))
      return updatedList
    })
  }

  return (
    <>
      <Heading appName="To Do.."/>
      <main>
        <AddTodoForm addTodo={addTodo}/>
        {
            todoList.length > 0 && 
              <ListTodos 
                todoList={todoList} 
                onChange={toggleCheckBox} 
                onClick={deleteTodo} 
                amountOfDoneTodo={todoList.filter(todo => todo.done).length} 
                totalAmountTodo={todoList.length}/>
        }
      </main>
    </>
  )
}

export default App
