import React from 'react';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-200">
        
        </div>
      </div>
    </div>
  );
}

export default App;
