import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        
        setInput("")
    }

    const handleChange = e => {
        setInput(e.target.value)
    }
        
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <>
                <input 
                    className="todo-input edit"
                    type='text' 
                    placeholder="Update a todo" 
                    value={input} 
                    name="text"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-btn edit">Update</button>
                </>): (
                   <>
                   <input 
                       className="todo-input"
                       type='text' 
                       placeholder="Add a todo" 
                       value={input} 
                       name="text"
                       onChange={handleChange}
                       ref={inputRef}
                   />
                   <button className="todo-btn">Add Todo</button>
                   </>) 
            }
            
            
        </form>
    )
}

export default TodoForm;
