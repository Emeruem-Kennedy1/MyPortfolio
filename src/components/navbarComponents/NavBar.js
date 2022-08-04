import React, {useState} from 'react'
import Button from '../utilities/Button'
import menuItems from './MenuItem'
// import './navbar.css'


export default function NavBar() {

  const [clicked, setClicked] = useState(false);

  const toggle = (idx) => {
    if (clicked === idx) {
      return setClicked(null);
    }
    setClicked(idx);
  }
  return (
    <div className='sticky-nav'>
        <ul className='nav-list'>
            {menuItems.map((item,index) => (
                <li className={ index+1===clicked ? `${item.cName} active`: item.cName} key={item.name} onClick={
                    () => {
                      toggle(index+1);
                    }
                } >
                    <a href={`${item.link}`}>{item.name}</a>
                </li>
            ))}
            <li className='nav-item'>
            <Button cName='btn btn-outline nav-item' children='Resume' />
            </li>
        </ul>
    </div>
  )
}
