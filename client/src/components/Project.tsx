import React, { useState, useEffect } from 'react'
import { ProjectInterface } from './Interfaces/ProjectInterface'
import { PhaseInterface } from './Interfaces/PhaseInterface'
import axios from 'axios'
import Layout from './Layout'
import Header from './Header'
import PhaseCard from './PhaseCard'
import NewCard from './NewCard'
import { useParams } from 'react-router-dom'

export default function Project() {
    const { id } = useParams<any>()
    const [project, setProject] = useState<ProjectInterface>()
    const [phases, setPhase] = useState<PhaseInterface[]>()

    useEffect(() => {
        const getProject = async () => {
            const res = await axios.get(`/project/${id}`, { withCredentials: true })
            setProject(res.data)
        }
        getProject()
        const getPhases = async () => {
            const res = await axios.get(`/phases/${id}`, { withCredentials: true })
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
                            <PhaseCard key={phase.id} data={phase} />
                    ))
                : null}
                {project ? <NewCard title='Create New Phase' destination={`create/phase/${project.id}`}/> : null}
            </Layout>
        </div>
    )
}
