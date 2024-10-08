import React from 'react'
import { projects } from '../data'
import { CardDemo } from './ui/Cards'

function RecentProjects() {
  return (
    <div className="py-20 text-white">
      <h1 className="heading">
        The Project of {' '}
        <span className="text-white"> recent projects </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-4 mt-10">
            {projects.map(() =>
            (
            <div className="lg:min-h-[20.5rem] h-[25rem] flex items-center sm:w-96 w-[80vw">
               <CardDemo> 
               </CardDemo>
            </div>
        ))}

        </div>
    </div>
  )
}

export default RecentProjects
