import React from 'react'
import CardContainer from '../components/CardContainer'
import data from '../projects'
import ElevatedButton from '../components/ElevatedButton'
import Tag from '../components/Tag'

export interface Project {
  name: string
  image: string
  description: string
  urls: Array<ProjectUrl>
  tags: Array<string>
}

export interface ProjectUrl {
  title: string
  url: string
}

const Projects: React.FC = () => (
  <>
    <div className="flex flex-row justify-start items-start max-w-full">{/* <ArrowLeft /> */}</div>
    <CardContainer>
      <>
        {data.projects.map((el: Project, i) => (
          <div key={i} className="flex flex-col pt-5 pb-8">
            <div className="flex max-w-full">
              <img
                src={el.image}
                className="max-w-3xl max-h-48 sm:max-w-5xl sm:max-h-60 rounded-2xl border-black border-2"
              />
              <div className="flex pl-10 flex-col justify-between">
                <div className="pb-10">
                  <p className="text-xl font-black sm:text-4xl">{el.name}</p>
                  <p className="text-base sm:text-lg pt-5">{el.description}</p>
                </div>
                <div className="flex flex-row flex-wrap">
                  {el.tags.map((tag, i) => (
                    <Tag title={tag} key={`${el.name}_tag-${tag}-${i}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row pt-8 sm:pl-40">
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
