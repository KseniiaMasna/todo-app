import React from 'react'
import './App.css'
import { Heading } from './components/Heading/Heading'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm'


function App() {

  return (
    <>
      <Heading appName="To Do.."/>
      <AddTodoForm />
    </>
  )
}

export default App
