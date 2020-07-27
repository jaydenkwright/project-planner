import React, {useEffect, useState} from 'react'
import Header from './Header'
import ProjectCard from './ProjectCard'
import NewProjectCard from './NewProjectCard'
import axios from 'axios'

interface Project{
    id: number,
    userId: string,
    name: string,
    description: string,
    category: string,
    dueDate: string,
    figma: string,
    github: string,
    privacy: boolean,
    date: string
}

const init = [{
    "id": 2,
    "userId": "e0d0e645-af9a-442e-a811-325b1a7f037a",
    "name": "Fuck",
    "description": "Social media app built with Flask and React",
    "category": "Web Development",
    "dueDate": "2020-07-30T00:00:00",
    "figma": "figma.com",
    "github": "github.com",
    "privacy": false,
    "date": "2020-07-24T01:33:22.017240",
  }]

export const Projects: React.FC =() => {
    const [projects, setProjects] = useState<Project[]>(init)
    const getProjects = async () => {
        const res = await axios.get('http://localhost:5000/projects', { withCredentials: true })
        if(res){
            setProjects(res.data)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])
    return (
        <div className="">
            <Header title="Projects"/>
            <div className="flex flex-wrap w-max-sm bg-gray-200 rounded-lg h-max-sm pb-64">
                {projects.map((project) => (
                    <ProjectCard data={project} />
                ))}
                {/* <ProjectCard data={{title: 'Social Media App', description: 'A social media app built with a React.JS frontend and a flask backend', category: 'Web Devlopment'}}/> 
                <ProjectCard data={{title: 'Social Media App', description: 'A social media app built with a React.JS frontend and a flask backend', category: 'Web Devlopment'}}/> 
                <ProjectCard data={{title: 'Social Media App', description: 'A social media app built with a React.JS frontend and a flask backend', category: 'Web Devlopment'}}/> */}
                <NewProjectCard />
            </div>
        </div>
    )
}

export default Projects