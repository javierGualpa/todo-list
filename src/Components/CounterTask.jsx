import { TodoContext } from "../context/TodoContext"
import { useContext } from "react"

function CounterTask() {

  const { totalTodos, todosCompleted } = useContext(TodoContext)

  return (
    <div className=" text-lg  font-medium mt-3 ">
      <p className="text-zinc-400 text-center">Has realizado {todosCompleted}  TODOS de {totalTodos}</p>
    </div>

  )

}

export default CounterTask