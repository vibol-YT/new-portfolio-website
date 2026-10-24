import { projects } from '@/constants/constant'
import React from 'react'
import ProjectCard from '../ProjectCard'



export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
