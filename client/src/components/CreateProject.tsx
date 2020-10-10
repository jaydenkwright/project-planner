import React, {useState} from 'react'
import Header from './Header'
import Layout from './Layout'
import Error from './Error'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Helmet from 'react-helmet';

const CreateProject: React.FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState<any>('Programming')
    const [dueDate, setDueDate] = useState('')
    const [privacy, setPrivacy] = useState<any>('Private')
    const [project, setProject] = useState<any>(undefined)
    const [error, setError] = useState<string | null>()
    const history = useHistory()
    const onSubmit = (e: React.FormEvent<HTMLFormElement> | undefined): void => {
        e?.preventDefault()
        const createProject = async () => {
            try{
                const res: any = await axios.post('/api/project/add', {
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
            <Helmet>
                <title>Create a new project</title>
            </Helmet>
           <Header title='Create'/> 
            <Layout>
                <div className='mx-auto py-16'>
                    { error ? <Error error={error}/> : null}
                    <form onSubmit={onSubmit}>
                        <label className='textboxLabel'>Name</label>
                        <input type='text' className='textbox' maxLength={100} required onChange={(e) => setName(e.target.value)}/>
                        <label className='textboxLabel'>Description</label>
                        <textarea className='descriptionTextArea' onChange={(e) => setDescription(e.target.value)} maxLength={200}/>
                        <label className='textboxLabel'>Category</label>
                        <select className='categorySelector' value={category} required onChange={(e) => setCategory(e.target.value)}>
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
                        <input type='date' className='dateSelector'onChange={(e) => setDueDate(e.target.value)}/>
                        <label className='textboxLabel'>Privacy</label>
                        <select className='categorySelector' value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                            <option value='Private'>Private</option>
                            <option value='Public'>Public</option>
                        </select>
                        <input type='submit' className='submitBtn' value='Submit'/>
                    </form> 
                </div>
           </Layout>
        </div>
    )
}

export default CreateProject
