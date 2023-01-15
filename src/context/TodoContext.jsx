import { createContext, useEffect } from "react";
import { useState } from "react";

export const TodoContext = createContext()


function useLocalStorage(nameTodo, initialValue) {

  const [loading, setLoading] = useState(true)

  const [todo, setTodo] = useState(initialValue)
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log('Hola Mundo')
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(nameTodo)

        let tareas;


        if (!localStorageTodos) {
          localStorage.setItem(nameTodo, JSON.stringify(initialValue))
          tareas = initialValue

        } else {
          tareas = JSON.parse(localStorageTodos)
        }

        setTodo(tareas)
        setLoading(false)
      } catch (error) {
        setError(true)
      }




    }, 500)
  }, [])




  const saveTodos = (newTodos) => {
    localStorage.setItem(nameTodo, JSON.stringify(newTodos))

    setTodo(newTodos)
  }


  return {
    todos: todo,
    saveTodos,
    loading,
    error
  }

}




function TodoContextProvider(props) {


  const { todos, saveTodos, loading, error } = useLocalStorage('tareas', [])


  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const todosCompleted = todos.filter(todo => todo.complete).length

  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos

  } else {
    searchedTodos = todos.filter(todo => {
      const todoTitle = todo.title.toLowerCase()
      const searchTask = searchValue.toLowerCase()

      return todoTitle.includes(searchTask)
    })
  }


  const todoComplete = (text) => {
    const completado = todos.findIndex(todo => todo.title === text)
    const newTodos = [...todos]
    newTodos[completado].complete = !newTodos[completado].complete

    saveTodos(newTodos)

  }

  const addTodos = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      complete: false,
      title: text
    })

    saveTodos(newTodos)

  }



  const todoDelete = (text) => {
    const newTodos = todos.filter(todo => todo.title !== text)
    saveTodos(newTodos)

  }



  return (
    <TodoContext.Provider value={{ todosCompleted, totalTodos, searchValue, setSearchValue, searchedTodos, todoComplete, todoDelete, loading, error, openModal, setOpenModal, addTodos }} >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider