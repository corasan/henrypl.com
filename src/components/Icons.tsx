import React from 'react'
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg'
import { ReactComponent as Mail } from '../assets/mail.svg'
import { ReactComponent as Twitter } from '../assets/twitter.svg'

const Icons: React.FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
  const iconList = [
    <Mail key="mail" />,
    <LinkedIn key="linkedin" />,
    <Twitter key="twitter" />,
    <Github key="github" />,
  ]
  const defaultProps = {
    height: 38,
    width: 38,
    className: 'stroke-current text-white',
  }

  return (
    <>
      {iconList.map((el) => (
        <div
          className="flex justify-center py-5 w-full cursor-pointer hover:bg-accent"
          key={el.key}
        >
          {React.cloneElement(el, {
            ...defaultProps,
            ...props,
          })}
        </div>
      ))}
    </>
  )
}

export default Icons
