import { MdDelete, MdBlock } from 'react-icons/md'
import { AiOutlineCheck } from 'react-icons/ai'

function Tasks({ task, onComplete, onDelete, completed }) {

  return (

    <div className="mt-6 mx-auto bg-slate-700 w-60">
      <div className="flex justify-center text-white items-center px-4 py-3" >
        <div className='flex items-center'>
          <span onClick={onComplete} className={`${completed ? 'text-green-700' : 'text-white'}  hover:text-green-700 text-xl  `}><AiOutlineCheck></AiOutlineCheck></span>
        </div>
        <h3 className={`${completed ? 'line-through' : 'no-underline'} flex-1 text-center text-lg font-medium`}>{task.title}</h3>
        <span onClick={onDelete} className="text-xl hover:text-red-700"><MdDelete></MdDelete></span>
      </div>


    </div >

  )

}


export default Tasks


