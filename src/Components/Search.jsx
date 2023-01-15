import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function Search() {

  const { searchValue, setSearchValue } = useContext(TodoContext)

  const OnSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <input type="text" placeholder='Busca tu tarea' className='block mx-auto mt-5 h-8 px-4 rounded-sm w-64 outline-slate-600' onChange={OnSearchValueChange} />
  )
}

export default Search