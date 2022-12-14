import React, {useState} from 'react'
import Button from '../utilities/Button'
import menuItems from './MenuItem'

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
                <li className={ index+1===clicked ? `${item.cName} active`: `${item.cName}`} key={item.name} onClick={
                    () => {
                      toggle(index+1);
                    }
                } >
                    <a className='not-btn' href={`${item.link}`}>{item.name}</a>
                </li>
            ))}
            <li className='nav-item'>
            <Button cName='btn btn-outline nav-item' children='Resume' link='https://drive.google.com/file/d/1KA-aZ2bIallnB4imXMAeOdl4hI3FccoE/view?usp=sharing' target='_blank' />
            </li>
        </ul>
    </div>
  )
}
