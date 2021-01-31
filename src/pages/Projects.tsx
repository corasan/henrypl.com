import React from 'react'
import CardContainer from '../components/CardContainer'
import data from '../projects'
import ElevatedButton from '../components/ElevatedButton'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export interface Project {
  name: string
  image: string
  description: string
  urls: Array<ProjectUrl>
}

export interface ProjectUrl {
  title: string
  url: string
}

const Projects: React.FC = () => (
  <>
    <div className="flex flex-row justify-start items-start max-w-full">
      <ArrowLeft />
      <span />
    </div>
    <CardContainer>
      <>
        {data.projects.map((el: Project, i) => (
          <div key={i} className="flex flex-row pt-5 pb-8">
            <div>
              <img src={el.image} className="max-w-5xl max-h-60 rounded-2xl" />
              <div className="flex flex-col justify-between pl-10">
                <div>
                  <p className="text-2xl font-black sm:text-4xl">{el.name}</p>
                  <p className="text-lg pt-5">{el.description}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {el.urls.map(({ url, title }, subIndex) => (
                <ElevatedButton url={url} title={title} key={subIndex} />
              ))}
            </div>
          </div>
        ))}
      </>
    </CardContainer>
  </>
)

export default Projects
