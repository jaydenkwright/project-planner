import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import CreateProject from './components/CreateProject'
import CreatePhase from './components/CreatePhase'
import Project from './components/Project'
import Phase from './components/Phase'
import Registration from './components/Registration'
import Login from './components/Login'
import RegistrationPage from './components/RegistrationPage'
import Settings from './components/Settings'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import axios from 'axios'
import { UserProvider } from './UserContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)
  useEffect(() => {
    const isLoggedIn = async () => {
      try{
        const res = await axios.get('/api/isLoggedIn', { withCredentials: true })
        setLoggedIn(true)
      }catch(err){
        setLoggedIn(false)
      }
    }
    isLoggedIn()
  }, [loggedIn])

  return (
    <UserProvider value={{setLoggedIn}}>
      <div className="App">
        {loggedIn === true ?
        <div className="flex">
          <Router>
          <Sidebar />
          <div className="flex-1 bg-white">
              <Switch>
                <Route path='/' exact>
                  <Projects />
                </Route>
                <Route path='/home' exact>
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
                <Route path='*'>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
        : loggedIn === false ? <Router>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/login' exact>
                <LoginPage />
              </Route>
              <Route path='/register' exact>
                <RegistrationPage />
              </Route>
              <Route path='*'>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Router> : 'loading'}
      </div>
    </UserProvider>
  );
}

export default App;
