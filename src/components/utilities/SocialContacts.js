import React from 'react'
// import './socialContacts.css'


const sociallinks = [
  {
    name: 'Github',
    url: 'github.com/james-m-h',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'linkedin.com/in/james-m-h',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jamesmh',
    icon: 'fab fa-twitter'
  },
  {
    name: 'Email',
    url: 'kennedyemeruem@gmail.com',
    icon: 'fas fa-envelope'
  }
]

export default function SocialContacts() {
  return (
    <div className="social-container">
      {sociallinks.map(link => (
        <a href={link.name ==='Email' ? `mailto:${link.url}` : link.url} target="_blank" rel="noopener noreferrer" className='link' key={link.name}>
          <i className= {`${link.icon}`} ></i>
          <p className="">{link.name}</p>
        </a>
      ))}
    </div>
  )
}