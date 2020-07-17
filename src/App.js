import React, { useState } from 'react'
import './App.scss'
import ReactPageScroller from 'react-page-scroller'
import Home from './views/Home'
import AboutMe from './views/AboutMe'
import SideMenu from './components/SideMenu'

function App() {
  const [page, setPage] = useState(0)

  const handlePageChange = (currentPage) => {
    setPage(currentPage)
  }

  return (
    <div className="App">
      <SideMenu activePage={page} onTabClick={handlePageChange} />
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={page}>
        <Home />
        <AboutMe />
      </ReactPageScroller>
    </div>
  )
}

export default App
