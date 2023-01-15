import React from 'react'
import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

function AddTask() {

  const { openModal, setOpenModal } = useContext(TodoContext)

  const saludar = () => [
    setOpenModal(!openModal)
  ]
  return (
    <button className='fixed bottom-2 right-2 z-10 bg-white rounded-full shadow-slate-500 shadow-2xl w-12 h-12' onClick={saludar}>+</button>
  )
}

export default AddTask