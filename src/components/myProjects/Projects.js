import React from 'react'
import ProjectCard from '../utilities/ProjectCard'
// import './projects.css'
import myProjects from './myProjects'

export default function Projects() {
  return (
    <>
    <section className='project-section' id='projects'>
        <h1>My Projects</h1>
        <div className='projects'>
        {
            myProjects.map((project,index) => {
                return <ProjectCard ProjectName={project.name} ProjectDescription={project.description} ProjectImage={project.image} ProjectLink={project.link} key={index} />
            })
        }
        </div>
    </section>
    
    </>
  )
}