import React from 'react'
import Header from './Header'

export const Projects: React.FC =() => {
    return (
        <div>
            <Header title="Projects"/>
            <div className="flex flex-wrap w-max-sm bg-gray-200 rounded-lg h-max-sm h-screen">
                <div className="bg-white w-48 h-48 rounded-lg mx-12 mt-10">
                    
                </div> 
                <div className="bg-white w-48 h-48 rounded-lg mx-12 mt-10">
                    
                </div> 
                <div className="bg-white w-48 h-48 rounded-lg mx-12 my-10">
                    
                </div> 
            </div>
        </div>
    )
}

export default Projects