import React from 'react'


const sociallinks = [
  {
    name: 'Github',
    url: 'https://github.com/Emeruem-Kennedy1/',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kennedy-emeruem-ab9250198/',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/EmeruemKennedy',
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