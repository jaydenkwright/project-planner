import React from 'react'
import { Props } from './Interfaces/ProjectInterface'
import { useHistory } from "react-router-dom";

export const ProjectCard: React.FC<Props> = ({ data }) => {
    const history = useHistory()
    return (
        <div className="flex-initial m-10 bg-white h-56 w-56 rounded-lg p-4 shadow-md" onClick={() => history.push(`/projects/${data.id}`)}>
            <p className="text-gray-900 text-xl font-semibold truncate">{data.name}</p>
            <p className="text-gray-600 font-medium mt-2">{data.description}</p>
            <div className="px-2 bg-red-500 rounded-full text-center shadow-sm">
                <p className="text-gray-100 mt-3 font-medium">{data.category}</p>
            </div>
        </div> 
    )
}

export default ProjectCard