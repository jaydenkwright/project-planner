import React, {useState} from 'react'
import Header from './Header'
import Layout from './Layout'
import moment from 'moment'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const CreateProject: React.FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState<any>('Programming')
    const [dueDate, setDueDate] = useState('')
    const [privacy, setPrivacy] = useState<any>('Private')
    const [project, setProject] = useState<any>(undefined)
    const [error, setError] = useState<string | null>()
    const history = useHistory()
    const onSubmit = (e: any): void => {
        e.preventDefault()
        const createProject = async () => {
            try{
                const res: any = await axios.post('http://localhost:5000/project/add', {
                    name,
                    description,
                    category,
                    dueDate,
                    github: 'github.com',
                    figma: 'figma.com',
                    privacy: privacy === 'Private' ? true : false
                }, { withCredentials: true })
                    .then(r => setProject(r.data))  
            }catch(err){
                setError(err.response.data.msg)
            }
        }
        createProject()
    }
    if(project){
        history.push(`/projects/${project.id}`)
    }
    return (
        <div>
           <Header title='Create'/> 
            <Layout>
                <div className='mx-auto py-16'>
                    { error ? <div className='text-gray-100 px-1 font-semibold bg-red-500 rounded-lg'>
                        {error}
                    </div> : null}
                    <form onSubmit={onSubmit}>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Name</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required onChange={(e) => setName(e.target.value)}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Description</label>
                        <textarea className='w-64 h-20 rounded-lg py-2 px-2 shadow-sm outline-none focus:shadow-outline block' onChange={(e) => setDescription(e.target.value)} maxLength={200}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Category</label>
                        <select className='w-64 px-2 py-2 rounded-lg shadow-sm outline-none focus:shadow-outline block' value={category} required onChange={(e) => setCategory(e.target.value)}>
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
                        <input type='date' className='w-64 px-2 py-2 rounded-lg shadow-sm outline-none focus:shadow-outline block'onChange={(e) => setDueDate(e.target.value)}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Privacy</label>
                        <select className='w-64 px-2 py-2 rounded-lg shadow-sm outline-none focus:shadow-outline block' value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                            <option value='Private'>Private</option>
                            <option value='Public'>Public</option>
                        </select>
                        <input type='submit' className='block px-2 py-2 mt-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold'/>
                    </form> 
                </div>
           </Layout>
        </div>
    )
}

export default CreateProject
