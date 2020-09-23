import React, { useState } from 'react'
import Header from './Header'
import Layout from './Layout'
import Error from './Error'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'

export const CreatePhase: React.FC = () => {
    const history = useHistory()
    const { projectId } = useParams<any>()
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
                        <label className='textboxLabel'>Name</label>
                        <input type='text' className='textbox' maxLength={100} required onChange={e => setName(e.target.value)}/>
                        <label className='textboxLabel'>Description</label>
                        <textarea className='descriptionTextArea'  maxLength={200} onChange={e => setDescription(e.target.value)}/>
                        <label className='textboxLabel'>Category</label>
                        <select className='categorySelector' value={category} onChange={e => setCategory(e.target.value)}>
                            <option value='Programming'>Programming</option>
                            <option value='Web devlopment'>Web devlopment</option>
                            <option value='Design'>Design</option>
                            <option value='Writing'>Writing</option>
                            <option value='Architecture'>Architecture</option>
                            <option value='Marketing'>Marketing</option>
                            <option value='Art'>Art</option>
                            <option value='Video'>Video</option>
                        </select>
                        <label className='textboxLabel'>Due By</label>
                        <input type='date' className='dateSelector' onChange={e => setDueDate(e.target.value)}/>
                        <input type='submit' className='submitBtn' value='Submit'/>
                    </form> 
                </div>
            </Layout>
        </div>
    )
}

export default CreatePhase