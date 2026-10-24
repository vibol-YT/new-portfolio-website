import { profiles } from '@/constants/constant'
import React from 'react'
import ProjectCard from '../ProjectCard'

export default function Profile() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
      {profiles.map((profile) => (
        <ProjectCard key={profile.id} project={profile} />
      ))}
    </div>
  )
}
