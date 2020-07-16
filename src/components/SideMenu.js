// @flow
import * as React from 'react'
import UserIcon from './UserIcon'
import ComputerIcon from './ComputerIcon'

type TabProps = {
  activePage: number,
  children: React.Element<any>,
  tab: number,
}
const Tab = ({ children, activePage, tab }: TabProps) => {
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

type Props = {
  activePage: number
}
export default ({ activePage }: Props): React.Node => (
  <div className="col side-menu">
    <Tab activePage={activePage} tab={0}>
      <ComputerIcon />
    </Tab>
    <Tab activePage={activePage} tab={1}>
      <UserIcon />
    </Tab>
  </div>
)
