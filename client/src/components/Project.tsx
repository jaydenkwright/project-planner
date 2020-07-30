import React, { useState, useEffect } from 'react'
import { ProjectInterface } from './Interfaces/ProjectInterface'
import { PhaseInterface } from './Interfaces/PhaseInterface'
import axios from 'axios'
import Layout from './Layout'
import Header from './Header'
import Phases from './Phases'
import { useParams } from 'react-router-dom'

export default function Project() {
    const { id } = useParams()
    const [project, setProject] = useState<ProjectInterface>()
    const [phases, setPhase] = useState<PhaseInterface[]>()

    useEffect(() => {
        const getProject = async () => {
            const res = await axios.get(`http://localhost:5000/project/${id}`, { withCredentials: true })
            setProject(res.data)
        }
        getProject()
        const getPhases = async () => {
            const res = await axios.get(`http://localhost:5000/phases/${id}`, { withCredentials: true })
            setPhase(res.data)
        }
        getPhases()
    }, [])
    return (
        <div>
            <Header title={project ? project.name : ''} description={project ? project.description : ''}/>
            <Layout>
                {phases ? 
                    phases.map((phase: any) => (
                            <Phases data={phase} />
                    ))
                : null}
            </Layout>
        </div>
    )
}
