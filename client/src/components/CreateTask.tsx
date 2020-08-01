import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { TaskInterface } from './Interfaces/TaskInterface'

export const CreateTask: React.FC<{ setTasks: React.Dispatch<React.SetStateAction<TaskInterface[] | undefined>>, tasks: TaskInterface[]}> = ({ setTasks, tasks }) => {
    const { id } = useParams()
    const [taskText, setTaskText] = useState('')
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const createTask = async () => {
            const res = await axios.post('http://localhost:5000/task/add', {
                phaseId: id,
                taskText
            }, { withCredentials: true})
            setTaskText('')
            setTasks([...tasks, res.data])
        }
        createTask()
    }
    return (
        <form onSubmit={submit}>
            <textarea className='w-full bg-gray-300 rounded-lg px-2 py-2 shadow-sm' placeholder='Enter a new task...' value={taskText} onChange={(e) => setTaskText(e.target.value)}></textarea>
            <input type='submit' className='block px-2 py-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold' />
        </form>
    )
}

export default CreateTask
