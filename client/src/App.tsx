import React from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import Create from './components/Create'
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
              <Route path='/create' exact>
                <Create />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
