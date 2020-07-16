import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import ReactPageScroller from 'react-page-scroller'
import Profile from './slides/Profile'

function App() {
  const [page, setPage] = useState(0)
  const handlePageChange = currentPage => {
    setPage(currentPage)
  }
  return (
    <div className="App">
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={page}>
        <Profile />
        <div className="slide">

        </div>
      </ReactPageScroller>
    </div>
  );
}

export default App;
