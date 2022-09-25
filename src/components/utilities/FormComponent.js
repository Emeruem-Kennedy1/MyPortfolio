import React, {useState} from 'react';

export default function FormComponent({action}) {

  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [buttonChild, setButtonChild] = useState('Submit');

  function submit(e) {
    setButtonChild('Submitting...');
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
      console.log(data);
      form.name.value = ''
      form.email.value = ''
      form.message.value = ''
      setSuccess(true)
      setMessage('Thank you for the message. I will reach out soon!')
      setButtonChild('Submit')
      setTimeout(() => {
        setSuccess(null)
        setMessage(null)
      }
      , 3000)

    }).catch(err => {
      console.log(err);
      setSuccess(false)
      setMessage('Something went wrong. Please try again later.')
    })
  }


  return (
    <div className="form-container">
      {
        success ? <p style={success?{color:'green'}:{color:'red'}}> {message} </p> : null
      }
      <form action={action} method="POST" onSubmit={submit}>
        <div className='name-and-email'>
          <InputBox name="name" placeholder="Fullname" type="text" label="Name" />
          <InputBox name="email" placeholder="Email Address" type="email" label="Email" />
        </div>
        <TextArea name="message" placeholder="Say Hi" label="Message"  rows='10'/>
        <div className="button-container">
          <FormButton type='submit' children={buttonChild} cName='btn btn-primary'/>
        </div>
      </form>
    </div>
  )
}


const FormButton = ({children, cName, type}) => {
  return (
    <button type={type} className={cName}>{children}</button>
  )
}


const InputBox = ({name, placeholder, type, value, cName, trackChange}) => {
  return (
    <div className="form-group input-box">
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
