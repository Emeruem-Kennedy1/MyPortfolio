import React from 'react'
// import './HeroSection.css'
import Button from '../utilities/Button'
import kendo from '../../assets/kendo.png'

export default function HeroSection() {
  return (
    <section className="hero-section">
        <div className="text-box">
            <p>Hi, My Name is </p>
            <h1>Kennedy Emeruem.</h1>
            <h2>Full Stack Web Developer</h2>
            <p> I'm a full stack web developer with a passion for creating clean and elegant web applications.</p>
            <Button cName='btn btn-primary contact-btn' children='Contact Me' />
            <Button cName='btn btn-outline resume-btn' children='Resume' />
        </div>
        <div className='hero-image'>
            <img src={kendo} alt="hero" />
        </div>
    </section>
  )
}
