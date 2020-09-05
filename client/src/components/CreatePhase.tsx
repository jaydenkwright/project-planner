import React, { useState } from 'react'
import Header from './Header'
import Layout from './Layout'
import Error from './Error'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'

export const CreatePhase: React.FC = () => {
    const history = useHistory()
    const { projectId } = useParams()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('Programming')
    const [dueDate, setDueDate] = useState('')
    const [phase, setPhase] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)
    const submit = (e: React.FormEvent<HTMLFormElement> | undefined): void => {
        e?.preventDefault()
        const createPhase = async () => {
            try{
                const res = axios.post('http://localhost:5000/phase/add', {
                    projectId,
                    name,
                    phaseNumber: 1,
                    description,
                    category,
                    dueDate
                }, { withCredentials: true })
                    .then(r => setPhase(r.data))
            }catch(err){
                setError(err.response.data.msg)
            }
        }
        createPhase()
    }

    if (phase){
        history.push(`/phase/${phase.id}`)
    }
    return (
        <div>
            <Header title='Create'/>
            <Layout>
                <div className='mx-auto py-16'>
                    { error ? <Error error={error}/> : null}
                    <form onSubmit={submit}>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Name</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required onChange={e => setName(e.target.value)}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Description</label>
                        <textarea className='w-64 h-20 rounded-lg py-2 px-2 shadow-sm outline-none focus:shadow-outline block'  maxLength={200} onChange={e => setDescription(e.target.value)}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Category</label>
                        <select className='w-64 px-2 py-2 rounded-lg shadow-sm outline-none focus:shadow-outline block' value={category} onChange={e => setCategory(e.target.value)}>
                            <option value='Programming'>Programming</option>
                            <option value='Web devlopment'>Web devlopment</option>
                            <option value='Design'>Design</option>
                            <option value='Writing'>Writing</option>
                            <option value='Architecture'>Architecture</option>
                            <option value='Marketing'>Marketing</option>
                            <option value='Art'>Art</option>
                            <option value='Video'>Video</option>
                        </select>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Due By</label>
                        <input type='date' className='w-64 px-2 py-2 rounded-lg shadow-sm outline-none focus:shadow-outline block' onChange={e => setDueDate(e.target.value)}/>
                        <input type='submit' className='block px-2 py-2 mt-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold'/>
                    </form> 
                </div>
            </Layout>
        </div>
    )
}

export default CreatePhase