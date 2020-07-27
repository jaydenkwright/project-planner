import React from 'react';
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-white">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
