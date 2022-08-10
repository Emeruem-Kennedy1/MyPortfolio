import React from 'react'

export default function Button({children, cName, type, link, target}) {
  return (
    <a type={type} className={cName} href={link} target={target}> {children} </a>
  )
}