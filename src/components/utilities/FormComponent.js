import React from 'react'
import Button from './Button'
import './formComponent.css'

export default function FormComponent() {
  return (
    <div className="form-container">
      <form action="" method="POST">
        <div className='name-and-email'>
          <InputBox name="name" placeholder="Fullname" type="text" label="Name" />
          <InputBox name="email" placeholder="Email Address" type="email" label="Email" />
        </div>
        <TextArea name="message" placeholder="Say Hi" label="Message"  rows='10'/>
        <div className="button-container">
          <Button children="Submit" cName='btn btn-primary'/>
        </div>
      </form>
    </div>
  )
}


const InputBox = ({name, placeholder, type, label, cName}) => {
  return (
    <div className="form-group input-box">
        {/* <label htmlFor={name}>{label}</label> */}
        <input type={type} className={`form-control ${cName}`} required id={name} name={name} placeholder={placeholder} />
    </div>
  )
}

const TextArea = ({name, placeholder, label, rows, cName}) => {
  return (
    <div className="form-group textarea">
        {/* <label htmlFor={name}>{label}</label> */}
        <textarea className={`form-control ${cName}`} required id={name} name={name} placeholder={placeholder} rows={rows? rows: '4' } ></textarea>
    </div>
  )
}
