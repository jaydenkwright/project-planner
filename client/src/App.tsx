import React, { useState } from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import CreateProject from './components/CreateProject'
import CreatePhase from './components/CreatePhase'
import Project from './components/Project'
import Phase from './components/Phase'
import Registration from './components/Registration'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <div className="App">
      {loggedIn ?
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-white">
          <Router>
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
            </Switch>
          </Router>
        </div>
      </div>
      : <Router>
          <Switch>
            <Route path='/register'>
              <Registration />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Router>}
    </div>
  );
}

export default App;
