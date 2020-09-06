import React from 'react'
import { Props } from './Interfaces/PhaseInterface'
import { useHistory } from "react-router-dom";

const PhaseCard: React.FC<Props> = ({ data }) => {
    const history = useHistory()
    return (
        <div className='phaseCardContainer' onClick={() => history.push(`/phase/${data.id}`)}>
            <div className='phaseName'>
                {data.name}
            </div>
            <div className="phaseCategoryContainer">
                <p className="phaseCategory">{data.category}</p>
            </div>
            <div className='phaseDescription'>
                {data.description}
            </div>
        </div>
    )
}

export default PhaseCard
