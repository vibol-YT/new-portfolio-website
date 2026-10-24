import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { education } from '@/constants/constant'

export default function Education() {
  return (
    <div>
        {education.map((edu, index) => (
                  <div key={index} className="flex flex-col gap-8">

                    {/* Title & Description */}
                    <div className="text-start xl:text-left">
                      <h3 className="text-4xl font-bold mb-2">{edu.tital}</h3>
                      <p className="max-w-[600px] text-gray-500">
                        {edu.descrip}
                      </p>
                    </div>

                    {/* Scroll Area */}
                    <ScrollArea className="h-100 pr-4">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Primary School / University */}
                        {edu.primarySch.map((item, idx) => (
                          <li
                            key={idx}
                            className="border-b p-6 rounded-xl shadow-sm hover:shadow-md transition"
                          >
                            <span className="text-cyan-500 text-sm">{item.duration}</span>
                            <h4 className="text-lg font-semibold mt-1">
                              {item.degree}
                            </h4>
                            <p className="text-gray-500">{item.instituation}</p>
                          </li>
                        ))}

                        {/* Other Courses */}
                        {edu.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="border-b p-6 rounded-xl shadow-sm hover:shadow-md transition"
                          >
                            <span className="text-cyan-500 text-sm">{item.duration}</span>
                            <h4 className="text-lg font-semibold mt-1">
                              {item.degree}
                            </h4>
                            <p className="text-gray-500">{item.instituation}</p>
                          </li>
                        ))}

                      </ul>
                    </ScrollArea>
                  </div>
                ))}
    </div>
  )
}
