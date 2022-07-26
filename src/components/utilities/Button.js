import React from 'react'
import './button.css'

export default function Button({children, cName}) {
  return (
    <button className={cName}> {children} </button>
  )
}