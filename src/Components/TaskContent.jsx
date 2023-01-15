import React from 'react'

export const TaskContent = (props) => {
  return (
    <div className='w-80 mx-auto p-4 mt-9'>
      {props.children}
    </div>
  )
}
