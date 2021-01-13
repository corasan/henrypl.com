import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen justify-center items-center">
        <Switch>
          <Route path="/">
            <About />
          </Route>
        </Switch>
        <Sidebar />
      </div>
    </Router>
  )
}

export default App
