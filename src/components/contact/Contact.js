import React from 'react'
import FormComponent from '../utilities/FormComponent'
import SocialContacts from '../utilities/SocialContacts'
import './contact.css'


export default function Contact() {
  return (
    <section className="contact-section">
    <div className="contact-text">
        <h1>Contact Me</h1>
        <p>
            If you would like to contact me, use any of the links below or use the form.
        </p>
      </div>
      <div className='contacts'>
        <SocialContacts />
        <FormComponent />
      </div>
    </section>
  )
}
