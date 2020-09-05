import React, { useState, useEffect, useRef } from 'react'
import CreateTask from './CreateTask'
import Task from './Task'
import Error from './Error'
import { TaskInterface } from './Interfaces/TaskInterface'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskInterface[] | any>()
    const [dragging, setDragging] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()
    const dragItem = useRef<any>()
    const dragNode = useRef<any>()

    useEffect(() => {
        const getTasks = async () => {
            const res = await axios.get(`http://localhost:5000/tasks/${id}`, { withCredentials: true })
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

    const handleDragEnter = (e: any, params: any) => {
        e.preventDefault()
        if (params.stage !== dragItem.current.stage){
            const newList = tasks?.filter((task: TaskInterface) => task.id !== dragItem.current.id)
            const currentTask = tasks.filter((task: TaskInterface) => task.id === dragItem.current.id)
            setTasks((task: TaskInterface[]) => {
                if (task !== [...newList, {...currentTask[0], stage: params.stage}]){
                    return [...newList, {...currentTask[0], stage: params.stage}]
                }
            })
            dragItem.current.stage = params.stage
        }
    }

    const updateStage = async () => {
        const res = await axios.post(`http://localhost:5000/task/${dragItem.current.id}/${dragItem.current.stage}`, { withCredentials: true })
    }

    const handleDragEnd = () => {
        updateStage()
        setDragging(false)
        dragNode.current?.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null
        dragNode.current = null
    }
    
    const todos = tasks ? tasks.filter((task: TaskInterface) => task?.stage === 'todo') : null
    const inProgress = tasks ? tasks.filter((task: TaskInterface) => task?.stage === 'in_progress') : null
    const completed = tasks ? tasks.filter((task: TaskInterface) => task?.stage === 'completed') : null
    return (
        <div className='flex p-4 w-full'>
            { error ? <Error error={error}/> : null}
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4' onDragEnter={dragging ? (e) => handleDragEnter(e, {stage: 'todo'}) : undefined}>
                <div className='text-xl text-text-gray-800 shadow-sm'>
                    To do
                </div>
                <CreateTask setTasks={setTasks} tasks={tasks ? tasks : []} setError={setError} />
                {todos ?
                    todos.map((task: TaskInterface) => (
                        <Task data={task} handleDragStart={handleDragStart} dragging={dragging} handleDragEnter={handleDragEnter}/>
                    )) 
                : null}
            </div>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4 shadow-sm' onDragEnter={dragging ? (e) => handleDragEnter(e, {stage: 'in_progress'}) : undefined}>
                <div className='text-xl text-text-gray-800'>
                    In progress
                </div>
                {inProgress ?
                    inProgress.map((task: TaskInterface) => (
                        <Task data={task} handleDragStart={handleDragStart} dragging={dragging} handleDragEnter={handleDragEnter}/>
                    )) 
                : null}
            </div>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4 shadow-sm' onDragEnter={dragging ? (e) => handleDragEnter(e, {stage: 'completed'}) : undefined}>
                <div className='text-xl text-text-gray-800'>
                    Completed
                </div>
                {completed ?
                    completed.map((task: TaskInterface) => (
                        <Task data={task} handleDragStart={handleDragStart} dragging={dragging} handleDragEnter={handleDragEnter}/>
                    )) 
                : null}
            </div>
        </div>
    )
}

export default Tasks
