import { useState } from 'react'
import CounterTask from './CounterTask'
import Search from './Search'
import Tasks from './Tasks'
import Header from './Header'
import AddTask from './AddTask'
import { TaskContent } from './TaskContent'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Modal } from './Modal'
import TodoForm from './TodoForm'





function App() {

  const { todoComplete, todoDelete, searchedTodos, loading, error, openModal } = useContext(TodoContext)

  return (
    <>
      <TaskContent >
        {openModal ? <h3></h3> : < Header />}
        <CounterTask />
        <Search />
        {loading && <p className='mt-4 text-center text-xl font-medium'>Cargando Todos...</p>}
        {(!loading && !searchedTodos.length) && <p className='text-center text-xl font-medium text-white mt-10'>Crea tu primer TODO</p>}
        {error && <p>Cargando Hubo un error...</p>}

        {
          searchedTodos.map((todo, index) => (
            <Tasks task={todo} key={index} onComplete={() => todoComplete(todo.title)} onDelete={() => todoDelete(todo.title)} completed={todo.complete} />
          ))
        }

        {openModal && <Modal>
          <TodoForm />
        </Modal>}
        <AddTask />
      </TaskContent>
    </>
  )
}

export default App
