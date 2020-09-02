import React, {useState} from 'react'
import { TaskProps } from './Interfaces/TaskInterface'

const Task: React.FC<TaskProps | any> = ({ data, handleDragStart, dragging, handleDragEnter }) => {
    return (
        <div draggable 
        onDragStart={(e) => handleDragStart(e, {id: data.id, stage: data.stage})}
        className='text-lg text-gray-900 py-3 px-2 bg-gray-100 mt-2 rounded-lg'>
            {data.taskText}
        </div>
    )
}

export default Task
