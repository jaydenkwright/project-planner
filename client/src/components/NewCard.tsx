import React from 'react'
import { useHistory } from "react-router-dom";

export const NewCard: React.FC<{title: String, destination: String}> = ({ title, destination }) => {
    const history = useHistory()
    const createNew = () => {
        history.push(`/${destination}`)
    }
    return (
        <div className="newCardContainer" onClick={createNew}>
            <p className="newCardTitle">{title}</p>
                <span>
                    <img className="newCardImage" src={require('../assets/plus.svg')} alt='Create new project'/>
                </span>
        </div>
    )
}

export default NewCard
