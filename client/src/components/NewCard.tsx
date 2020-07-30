import React from 'react'
import { useHistory } from "react-router-dom";

export const NewCard: React.FC<{title: String, destination: String}> = ({ title, destination }) => {
    const history = useHistory()
    const createNew = () => {
        history.push(`/${destination}`)
    }
    return (
        <div className="m-10 bg-white h-56 w-56 rounded-lg p-4 shadow-md" onClick={createNew}>
            <p className="text-gray-900 font-semibold text-xl text-center">{title}</p>
                <span>
                    <img className="w-24 h-24 m-auto mt-6 text-center" src={require('../assets/plus.svg')} alt='Create new project'/>
                </span>
        </div>
    )
}

export default NewCard
