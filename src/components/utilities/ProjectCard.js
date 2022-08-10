import React from 'react'
import Button from './Button'

export default function ProjectCard({ProjectName, ProjectDescription, ProjectImage, goto}) {
  return (
    <>
        <div className='project-card'>
            <div className='project-card-image'>
                <img src={ProjectImage} alt={ProjectName} />
            </div>
            <div className='project-card-text'>
                <h3>{ProjectName}</h3>
                <p>{ProjectDescription}</p>
                <Button  cName='btn btn-outline' children='View Project' link={goto} />
            </div>
        </div>
    </>
  )
}
