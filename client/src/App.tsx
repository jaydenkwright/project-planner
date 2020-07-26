import React from 'react';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 bg-white">
          <p className="text-6xl font-semibold mt-12">Projects</p>
          <div className="w-max-sm bg-gray-200 rounded-lg h-max-sm h-screen">
            test
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
