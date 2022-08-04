import React from 'react'
// import './button.css'

export default function Button({children, cName, type}) {
  return (
    <button type={type} className={cName}> {children} </button>
  )
}