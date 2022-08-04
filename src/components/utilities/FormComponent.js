import React from 'react'
import Button from './Button'
// import './formComponent.css'




export default function FormComponent({action}) {

  function submit(e) {
    e.preventDefault()
    const form = e.target
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }
    fetch(action, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      form.name.value = ''
      form.email.value = ''
      form.message.value = ''
      console.log(data)
    }
    )
    console.log(formData);
  }


  return (
    <div className="form-container">
      <form action={action} method="POST" onSubmit={submit}>
        <div className='name-and-email'>
          <InputBox name="name" placeholder="Fullname" type="text" label="Name" />
          <InputBox name="email" placeholder="Email Address" type="email" label="Email" />
        </div>
        <TextArea name="message" placeholder="Say Hi" label="Message"  rows='10'/>
        <div className="button-container">
          <Button type='submit' children="Submit" cName='btn btn-primary'/>
        </div>
      </form>
    </div>
  )
}


const InputBox = ({name, placeholder, type, value, cName, trackChange}) => {
  return (
    <div className="form-group input-box">
        {/* <label htmlFor={name}>{label}</label> */}
        <input onChange={trackChange} type={type} className={`form-control ${cName}`} required id={name} name={name} placeholder={placeholder} />
    </div>
  )
}

const TextArea = ({name, placeholder, rows, cName}) => {
  return (
    <div className="form-group textarea">
        <textarea className={`form-control ${cName}`} required id={name} name={name} placeholder={placeholder} rows={rows? rows: '4' } ></textarea>
    </div>
  )
}
