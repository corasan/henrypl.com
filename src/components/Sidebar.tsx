import Icons from './Icons'

const Sidebar = () => {
  const responsive =
    'sm:flex-col sm:min-h-screen sm:min-w-0 sm:justify-end sm:items-center sm:right-0 sm:px-5'
  return (
    <div className={`flex flex-row min-w-full min-h-24 bg-gray-900 fixed bottom-0 ${responsive}`}>
      <Icons />
    </div>
  )
}

export default Sidebar
