import React, { useState } from 'react';
import './App.scss';
import ReactPageScroller from 'react-page-scroller';
import Home from './views/Home';
import SideMenu from './components/SideMenu';

function App() {
  const [page, setPage] = useState(0);

  const handlePageChange = (currentPage) => {
    setPage(currentPage);
  };

  return (
    <div className="App">
      <SideMenu activePage={page} />
      <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={page}>
        <Home />
        <div className="col slide" />
      </ReactPageScroller>
    </div>
  );
}

export default App;
