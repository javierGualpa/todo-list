import React from 'react'
import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoForm = () => {

  const { openModal, setOpenModal, addTodos } = useContext(TodoContext)

  const [valueTodo, setValueTodo] = useState('')

  const cancelarModal = () => {
    setOpenModal(false)
  }

  const añadirTodo = (event) => {
    event.preventDefault()
    addTodos(valueTodo)
    setOpenModal(false)
  }
  const onChange = (e) => {
    setValueTodo(e.target.value)
  }

  return (
    <form className='w-80 flex flex-col gap-4' onSubmit={añadirTodo}>
      <h3 className='text-white font-semibold text-2xl text-center mb-4'>Crea tu todo</h3>
      <textarea name="" id="" cols="30" rows="10" placeholder='Escribe la tarea que quieres añadir' className='resize-none p-4' value={valueTodo} onChange={onChange}></textarea>
      <div className='flex justify-around' >
        <button className='bg-zinc-700 px-4 py-1 rounded-md' type='button' onClick={cancelarModal}>Cancelar</button >
        <button className='bg-zinc-700 px-4 py-1 rounded-md' type='submit'>Añadir</button>
      </div>
    </form>
  )
}

export default TodoForm