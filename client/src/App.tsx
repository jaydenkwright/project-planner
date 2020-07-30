import React from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import CreateProject from './components/CreateProject'
import Project from './components/Project'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
              <Route path='/create/phase' exact>
                fukc
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
