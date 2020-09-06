import React from 'react'
import { Props } from './Interfaces/ProjectInterface'
import { useHistory } from "react-router-dom";

export const ProjectCard: React.FC<Props> = ({ data }) => {
    const history = useHistory()
    return (
        <div className="projectCardContainer" onClick={() => history.push(`/projects/${data.id}`)}>
            <p className="projectName">{data.name}</p>
            <p className="projectDescription">{data.description}</p>
            <div className="projectCategoryContainer">
                <p className="projectCategory">{data.category}</p>
            </div>
        </div> 
    )
}

export default ProjectCard