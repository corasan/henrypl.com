import React, { useState } from 'react';
import './App.scss';
import ReactPageScroller from 'react-page-scroller'
import Profile from './slides/Profile'
import SideMenu from './components/SideMenu';

function App() {
  const [page, setPage] = useState(0)

  const handlePageChange = currentPage => {
    setPage(currentPage)
  }

  return (
    <div className="App">
      <SideMenu activePage={page} />
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={page}>
        <Profile />
        <div className="col slide">

        </div>
      </ReactPageScroller>
    </div>
  );
}

export default App;
