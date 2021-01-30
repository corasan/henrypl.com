import { ReactChild } from 'react'

type Props = {
  children: ReactChild
}
const CardContainer = ({ children }: Props) => {
  const responsive = 'sm:w-3/5 sm:px-14 sm:py-16 sm:shadow-lg'
  return (
    <div
      className={`flex flex-wrap min-w-full sm:min-w-0 justify-center bg-white pb-24 px-0 flex-col ${responsive}`}
    >
      {children}
    </div>
  )
}

export default CardContainer
