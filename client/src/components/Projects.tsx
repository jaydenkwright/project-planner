import React, {useEffect, useState} from 'react'
import Header from './Header'
import ProjectCard from './ProjectCard'
import NewCard from './NewCard'
import { ProjectInterface, init } from './Interfaces/ProjectInterface'
import Layout from './Layout'
import axios from 'axios'

export const Projects: React.FC =() => {
    const [projects, setProjects] = useState<ProjectInterface[]>(init)
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
                    <ProjectCard key={project.id} data={project} />
                ))}
                <NewCard title='Create New Project' destination={`create/project/}`}/>
            </Layout>
        </div>
    )
}

export default Projects