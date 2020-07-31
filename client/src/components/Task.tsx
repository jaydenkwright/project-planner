import React from 'react'
import { TaskProps } from './Interfaces/TaskInterface'

const Task: React.FC<TaskProps> = ({ data }) => {
    return (
        <div className='text-lg text-gray-900 py-3 px-2 bg-gray-100 mt-2 rounded-lg'>
            {data.taskText}
        </div>
    )
}

export default Task
