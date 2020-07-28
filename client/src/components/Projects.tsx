import React, {useEffect, useState} from 'react'
import Header from './Header'
import ProjectCard from './ProjectCard'
import NewProjectCard from './NewProjectCard'
import { Project, init } from './Interfaces/ProjectInterface'
import Layout from './Layout'
import axios from 'axios'

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