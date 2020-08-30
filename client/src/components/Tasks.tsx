import React, { useState, useEffect, useRef } from 'react'
import CreateTask from './CreateTask'
import Task from './Task'
import { TaskInterface } from './Interfaces/TaskInterface'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>()
    const [dragging, setDragging] = useState<boolean>(false)
    const { id } = useParams()
    const dragItem = useRef<any>()
    const dragNode = useRef<any>()

    useEffect(() => {
        const getTasks = async () => {
            const res = await axios.get(`http://localhost:5000/tasks/${id}`, { withCredentials: true })
            console.log(res.data)
            setTasks(res.data)
        }
        getTasks()
    }, [])

    const handleDragStart = (e: any, params: any) => {
        dragItem.current = params
        dragNode.current = e.target
        dragNode.current?.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
    }

    const handleDragEnd = () => {
        setDragging(false)
        dragNode.current?.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null
        dragNode.current = null
    }

    return (
        <div className='flex p-4 w-full'>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4'>
                <div className='text-xl text-text-gray-800 shadow-sm'>
                    To do
                </div>
                <CreateTask setTasks={setTasks} tasks={tasks ? tasks : []}/>
                {tasks ?
                    tasks.map((task) => (
                        <Task data={task} handleDragStart={handleDragStart} dragging={dragging}/>
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
