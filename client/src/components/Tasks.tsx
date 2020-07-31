import React, { useState, useEffect } from 'react'
import CreateTask from './CreateTask'
import Task from './Task'
import { TaskInterface } from './Interfaces/TaskInterface'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>()
    const { id } = useParams()

    useEffect(() => {
        const getTasks = async () => {
            const res = await axios.get(`http://localhost:5000/tasks/${id}`, { withCredentials: true })
            setTasks(res.data)
        }
        getTasks()
    }, [])
    return (
        <div className='flex p-4 w-full'>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4'>
                <div className='text-xl text-text-gray-800 shadow-sm'>
                    To do
                </div>
                <CreateTask />
                {tasks ?
                    tasks.map((task) => (
                        <Task data={task} />
                    )) 
                : null}
            </div>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4 shadow-sm'>
                <div className='text-xl text-text-gray-800'>
                    In progress
                </div>
            </div>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4 shadow-sm'>
                <div className='text-xl text-text-gray-800'>
                    Completed
                </div>
            </div>
        </div>
    )
}

export default Tasks
