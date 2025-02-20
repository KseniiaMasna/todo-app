import './AddTodoForm.css'
import React from "react"

export const AddTodoForm = (props) => {

    return (
            <form action={props.addTodo}>
                <input 
                    type="text" 
                    name="todo"
                    required
                />
                <button type="submit">Add</button>
            </form>
    )
}