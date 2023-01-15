import React from 'react'
import ReactDOM from 'react-dom '


export const Modal = (props) => {
  return (
    ReactDOM.createPortal(
      <div className='modal min-h-screen absolute top-0 min-w-full flex justify-center items-center'>
        {props.children}
      </div>,
      document.getElementById('modal')
    )
  )
}
