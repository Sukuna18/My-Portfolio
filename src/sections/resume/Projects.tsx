import { ReactElement } from 'react'
import ProjectItem from './ProjectItem.js'
import Section from '../Section.js'
import projects from '../../data/projects.json'

const Projects = (): ReactElement => {
  return (
    <Section id='projects' title='Projects' subtitle="I've contributed to">
      <div className='flex flex-wrap md:px-5 mt-10 w-full'>
        {projects.map((project) => (
          <ProjectItem key={project.projectName} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
