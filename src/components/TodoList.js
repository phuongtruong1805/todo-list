import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

function TodoList() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        
        const newTodo = [todo, ...todos]

        setTodos(newTodo)
        console.log(...todos)
    }

    const completeTodo = id => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(updatedTodo)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo} 
                removeTodo={removeTodo}
                updateTodo={updateTodo}           
            />
        </div>
    )
}

export default TodoList;
