import React, { useState, useEffect } from 'react'
import Header from './Header'
import Layout from './Layout'
import Tasks from './Tasks'
import { useParams } from 'react-router-dom'
import { PhaseInterface } from './Interfaces/PhaseInterface'
import axios from 'axios'

export const Phase: React.FC = () => {
    const { id } = useParams()
    const [phase, setPhase] = useState<PhaseInterface>()

    useEffect(() => {
        const getPhase = async () => {
            const res = await axios.get(`http://localhost:5000/phase/${id}`, { withCredentials: true})
            setPhase(res.data)
        }
        getPhase()
    }, [])


    return (
        <div>
            <Header title={phase ? phase.name : ''} description={phase ? phase.description : ''}/>
            <Layout>
                <Tasks />
            </Layout>
        </div>
    )
}

export default Phase
