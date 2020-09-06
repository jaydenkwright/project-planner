import React, {useState} from 'react'
import { TaskProps } from './Interfaces/TaskInterface'

const Task: React.FC<TaskProps | any> = ({ data, handleDragStart, dragging, handleDragEnter }) => {
    return (
        <div draggable 
        onDragStart={(e) => handleDragStart(e, {id: data.id, stage: data.stage})}
        className='task'>
            {data.taskText}
        </div>
    )
}

export default Task
