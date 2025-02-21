import React from "react"
import './IconCloseButton.css'

export const IconCloseButton = (props) => {
    return (
        <button className="close-button" aria-label="Close" onClick={props.onClick}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="16" 
            height="16" 
            fill="currentColor"
            aria-hidden="true"
            >
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}