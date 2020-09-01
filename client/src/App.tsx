import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import CreateProject from './components/CreateProject'
import CreatePhase from './components/CreatePhase'
import Project from './components/Project'
import Phase from './components/Phase'
import Registration from './components/Registration'
import Login from './components/Login'
import Settings from './components/Settings'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>()
  useEffect(() => {
    const isLoggedIn = async () => {
      try{
        const res = await axios.get('http://localhost:5000/isLoggedIn', { withCredentials: true })
        console.log(res)
        setLoggedIn(true)
      }catch(err){
        setLoggedIn(false)
        console.log(err)
      }
    }
    isLoggedIn()
  }, [])

  return (
    <div className="App">
      {loggedIn ?
      <div className="flex">
        <Router>
        <Sidebar />
        <div className="flex-1 bg-white">
            <Switch>
              <Route path='/' exact>
                <Projects />
              </Route>
              <Route path='/create/project' exact>
                <CreateProject />
              </Route>
              <Route path='/projects/:id' exact>
                <Project />
              </Route>
              <Route path='/create/phase/:projectId' exact>
                <CreatePhase />
              </Route>
              <Route path='/phase/:id' exact>
                <Phase />
              </Route>
              <Route path='/settings' exact>
                <Settings />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      : loggedIn === false ? <Router>
          <Switch>
            <Route path='/'>
              <Registration />
              <Login />
            </Route>
            <Route path='/login'>
            </Route>
          </Switch>
        </Router> : 'loading'}
    </div>
  );
}

export default App;
