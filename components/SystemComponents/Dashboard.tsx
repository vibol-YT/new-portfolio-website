import { SystemProjects } from '@/constants/constant'
import React from 'react'
import ProjectCard from '../ProjectCard'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {SystemProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  )
}
