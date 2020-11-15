import React, { useState,useEffect } from 'react';
import { TodoFrom } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(()=>{
      const saved=JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(saved)
    },[])
  
    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
  
    const addHandler = (title: string) => {
      const newTodo = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setTodos(prev => [newTodo, ...prev])
      // setTodos([newTodo,...todos])
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev => prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
    }
  
    const removeHandler = (id: number) => {
      const shouldRemove = window.confirm(' Вы уверен что хотите удалить?')
      if (shouldRemove) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }
  
    }
    return <React.Fragment>
        <TodoFrom onAdd={addHandler} />
        <TodoList todos={todos}
            onRemove={removeHandler}
            onToggle={toggleHandler} />
    </React.Fragment>
}