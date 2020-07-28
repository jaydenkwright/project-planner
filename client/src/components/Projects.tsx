import React, {useEffect, useState} from 'react'
import Header from './Header'
import ProjectCard from './ProjectCard'
import NewProjectCard from './NewProjectCard'
import Layout from './Layout'
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
    "id": 0,
    "userId": "",
    "name": "",
    "description": "",
    "category": "",
    "dueDate": "",
    "figma": "",
    "github": "",
    "privacy": false,
    "date": "",
  }]

export const Projects: React.FC =() => {
    const [projects, setProjects] = useState<Project[]>(init)
    const getProjects = async () => {
        const res = await axios.get('http://localhost:5000/projects', { withCredentials: true })
        setProjects(res.data)
    }

    useEffect(() => {
        getProjects()
    }, [])
    return (
        <div className="">
            <Header title="Projects"/>
            <Layout>
                {projects.map((project) => (
                    <ProjectCard data={project} />
                ))}
                <NewProjectCard />
            </Layout>
        </div>
    )
}

export default Projects