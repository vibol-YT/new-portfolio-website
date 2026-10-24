import FigmaCard from '@/components/FigmaCard'
import { UiProjects } from '@/constants/constant'
import React from 'react'

export default function SimpleUi() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {UiProjects.map((project)=> (
            <FigmaCard key={project.id} project={project} />
        ))}
    </div>
  )
}
