import React from 'react'
import Header from './Header'
import ProjectCard from './ProjectCard'
import NewProjectCard from './NewProjectCard'

export const Projects: React.FC =() => {
    return (
        <div>
            <Header title="Projects"/>
            <div className="flex flex-wrap w-max-sm bg-gray-200 rounded-lg h-max-sm h-screen">
                <ProjectCard data={{title: 'Social Media App', description: 'A social media app built with a React.JS frontend and a flask backend', category: 'Web Devlopment'}}/> 
                <NewProjectCard />
            </div>
        </div>
    )
}

export default Projects