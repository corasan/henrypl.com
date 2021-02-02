import React from 'react'
import './App.css'
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Sidebar from './components/Sidebar'
import { ReactComponent as ArrowLeft } from './assets/arrow-left.svg'

function App() {
  const history = useHistory()
  const homeMatch = useRouteMatch('/')

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-10 pt-4 pb-4 sm:px-24 sm:pt-6 sm:pb-14">
      {!homeMatch?.isExact && (
        <div className="flex flex-row w-full justify-start py-8">
          <div className="cursor-pointer" onClick={history.goBack}>
            <ArrowLeft className="stroke-current text-accent inline-block" />
            <span className="pl-2 text-accent font-bold inline-block">Home</span>
          </div>
        </div>
      )}

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
  )
}

export default App
