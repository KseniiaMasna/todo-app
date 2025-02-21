import './Counter.css'
import React from 'react'

export const Counter = (props) => {
    return (
        <div className='counter'>
            <h3>{props.amountOfDoneTodo} of {props.totalAmountTodo} completed</h3>
        </div>
    )
}