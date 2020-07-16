// @flow
import React from 'react'
import UserIcon from './UserIcon'
import ComputerIcon from './ComputerIcon'

type Props = {
  activePage: number,
}

const Tab = ({ children, activePage, tab }) => {
  const isActive = activePage === tab
  const color = isActive ? '#56dcee' : '#fff'
  const style = {
    borderRightColor: '#56dcee', 
    borderRightWidth: isActive ? 2 : 0,
  }

  return (
    <div style={style} className="tab">
      {React.cloneElement(children, { color })}
    </div>
  )
}

export default ({ activePage }: Props): React$Node => {
  console.log('activePage', activePage)
  return (
    <div className="col side-menu">
      <Tab activePage={activePage} tab={0}>
        <ComputerIcon />
      </Tab>
      <Tab activePage={activePage} tab={1}>
        <UserIcon />
      </Tab>
    </div>
  )
}
