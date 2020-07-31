import React from 'react'
import CreateTask from './CreateTask'
import Task from './Task'

export const Tasks = () => {
    return (
        <div className='flex p-4 w-full'>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4'>
                <div className='text-xl text-text-gray-800 shadow-sm'>
                    To do
                </div>
                <CreateTask />
                <Task />
                <Task />
                <Task />
            </div>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4 shadow-sm'>
                <div className='text-xl text-text-gray-800'>
                    In progress
                </div>
                <Task />
            </div>
            <div className='w-1/3 h-screen bg-white mx-4 rounded-lg p-4 shadow-sm'>
                <div className='text-xl text-text-gray-800'>
                    Completed
                </div>
                <Task />
            </div>
        </div>
    )
}

export default Tasks
