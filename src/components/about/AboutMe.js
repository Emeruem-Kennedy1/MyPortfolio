import React from 'react'
import Accordion from '../utilities/Accordion'
import Skills from '../utilities/Skills'
import Bio from '../utilities/Bio'

export default function AboutMe() {
  return (
    <section className="about-me" id='about'>
        <h1>About Me</h1>
        <div className='accordion-and-bio' >
          <Bio />
          <Accordion title='Experience' />
        </div>
        <Skills />
    </section>
  )
}
