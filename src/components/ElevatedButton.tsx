import React from 'react'
import { ProjectUrl } from '../pages/Projects'

const ElevatedButton: React.FC<ProjectUrl> = ({ title, url }: ProjectUrl) => (
  <div className="bg-black mr-4">
    <a
      href={url}
      className="flex justify-center w-full pt-2 pb-2 pl-7 pr-7 bg-accent transition duration-500 ease-in-out transform hover:translate-x-1 hover:-translate-y-1"
      target={url ?? undefined}
      rel="noreferrer"
    >
      <p className="font-black text-xl">{title}</p>
    </a>
  </div>
)

export default ElevatedButton
