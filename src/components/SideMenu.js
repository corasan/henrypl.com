// @flow
import * as React from 'react'
import UserIcon from './UserIcon'
import ComputerIcon from './ComputerIcon'

type TabProps = {
  activePage: number,
  children: React.Element<any>,
  tab: number,
  onClick: (tab: number) => void,
}
const Tab = ({
  children, activePage, tab, onClick,
}: TabProps) => {
  const isActive = activePage === tab
  const color = isActive ? '#56dcee' : '#fff'
  const style = {
    borderColor: '#56dcee',
    borderRightWidth: isActive ? 2 : 0,
    borderTopWidth: isActive ? 2 : 0,
  }

  return (
    <div
      style={style}
      className="tab"
      onClick={() => onClick(tab)}
      onKeyDown={() => onClick(tab)}
      role="button"
      tabIndex={tab}
      name={`Tab ${tab}`}
    >
      {React.cloneElement(children, { color })}
    </div>
  )
}

type Props = {
  activePage: number,
  onTabClick: () => void,
}
export default ({ activePage, onTabClick }: Props): React.Node => (
  <div className="col side-menu">
    <Tab activePage={activePage} tab={0} onClick={onTabClick}>
      <ComputerIcon />
    </Tab>
    <Tab activePage={activePage} tab={1} onClick={onTabClick}>
      <UserIcon />
    </Tab>
  </div>
)
