"use client"

import { Card } from "@/components/ui/card"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Image from "next/image"

interface Project {
  image: string
  title: string
  description: string
  githubUrl: string
  liveUrl: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group w-full max-w-sm border-b-2 border-gray-200 p-4 rounded-lg  bg-white/10 shadow-md hover:shadow-lg transition-shadow duration-300">

      <Card className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 bg-transparent border-none shadow-none">

        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden rounded-2xl">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />

          {/* Soft Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Floating Buttons */}
          <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
            
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white transition"
            >
              <FaGithub className="text-gray-800 text-lg" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
            >
              <FaExternalLinkAlt className="text-sm" />
            </a>

          </div>

          {/* Title */}
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-2xl font-semibold drop-shadow-md">
              {project.title}
            </h3>
          </div>

        </div>
      </Card>

      <div className="">
        <p className="text-sm text-white/90 leading-relaxed">
          {project.description}
        </p>
      </div>

    </div>
  )
}