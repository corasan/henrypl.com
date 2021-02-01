import React from 'react'
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg'
import { ReactComponent as Mail } from '../assets/mail.svg'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Download } from '../assets/download.svg'

const Icons: React.FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
  const iconList = [
    {
      component: <Download />,
      key: 'download-resume',
      link: `${process.env.PUBLIC_URL}/Henry_Paulino_Resume.pdf`,
    },
    {
      component: <Mail />,
      key: 'mail',
      link: 'mailto: contact@henrypl.com',
    },
    {
      component: <LinkedIn />,
      key: 'linkedin',
      link: 'https://linkedin.com/in/henrypl95',
    },
    {
      component: <Twitter />,
      key: 'twitter',
      link: 'https://twitter.com/henrypl_dev',
    },
    {
      component: <Github />,
      key: 'github',
      link: 'https://github.com/corasan',
    },
  ]
  const defaultProps = {
    height: 36,
    width: 36,
    className: 'stroke-current text-white',
  }

  return (
    <>
      {iconList.map((el) => (
        <a
          href={el.link ?? '#'}
          key={el.key}
          target={el.link ?? undefined}
          rel="noreferrer"
          className="flex justify-center py-5 px-5 w-full cursor-pointer hover:bg-accent"
          {...(el.key === 'download-resume' && {
            download: el.link,
          })}
        >
          {React.cloneElement(el.component, {
            ...defaultProps,
            ...props,
          })}
        </a>
      ))}
    </>
  )
}

export default Icons
