import React from 'react'
// import './skills.css'
import { mySkills } from './myProgrammingLanguages'



export default function Skills() {
  return (
    <section className="skills-section">
        <h2>My Technologies</h2>
        <div className='skills'>
            {
                mySkills.map((item, index) => {
                    return (
                        <SkillCard key={index} language={item.language} icon={item.icon} />
                    )
                })
            }
        </div>
    </section>
  )
}



function SkillCard({language, icon}) {
    return (
        <div className="skill-card">
            <div className="skill-icon">
                <i className={`${icon}`}></i>
            </div>
            <hr></hr>
            <div className="skill-info">
                <h3>{language}</h3>
            </div>
        </div>
    )
}