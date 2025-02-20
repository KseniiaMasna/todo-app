import React from 'react';
import './Heading.css'

interface HeadingProps {
    appName: string
    quote?: string
    yearOfCreation?: number
}

export const Heading = ({appName, quote, yearOfCreation}: HeadingProps) => {

    return (
        <header>
            <h1>{appName}</h1>
        </header>        
    )
}