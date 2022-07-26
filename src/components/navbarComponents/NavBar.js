import React from 'react'
import Button from '../utilities/Button'
import menuItems from './MenuItem'
import './navbar.css'

export default function NavBar() {
  return (
    <div className='sticky-nav'>
        <ul className='nav-list'>
            {menuItems.map(item => (
                <li className={item.cName} key={item.name}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
            <li className='nav-item'>
            <Button cName='btn btn-outline nav-item' children='Resume' />
            </li>
        </ul>
    </div>
  )
}
