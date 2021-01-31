import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen justify-center items-center px-12 py-20 sm:px-24">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Sidebar />
      </div>
    </Router>
  )
}

export default App
