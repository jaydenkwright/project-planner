import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { TaskInterface } from './Interfaces/TaskInterface'

export const CreateTask: React.FC<{ setTasks: React.Dispatch<React.SetStateAction<TaskInterface[] | undefined>>, tasks: TaskInterface[], setError: React.Dispatch<React.SetStateAction<string | null>>}> = ({ setTasks, tasks, setError }) => {
    const { id } = useParams<any>()
    const [taskText, setTaskText] = useState('')
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const createTask = async () => {
            try{
                const res = await axios.post('http://localhost:5000/task/add', {
                    phaseId: id,
                    taskText
                }, { withCredentials: true})
                setTaskText('')
                setTasks([...tasks, res.data])
            }catch(err){
                setError(err.response.data.msg)
            }
        }
        createTask()
    }
    return (
        <form onSubmit={submit}>
            <textarea className='taskTextArea' placeholder='Enter a new task...' value={taskText} onChange={(e) => setTaskText(e.target.value)}></textarea>
            <input type='submit' className='submitBtn' value='Submit' />
        </form>
    )
}

export default CreateTask
