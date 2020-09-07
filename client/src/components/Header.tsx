import React from 'react'

interface Props{
    title: String,
    description?: String
}

export const Header: React.FC<Props> = ({ title, description }) => {
    return (
        <div className="headerContainer">
            <p className="headerTitle">{ title }</p>
                {description ?
                    <div className='headerDescription'>
                        {description}
                    </div>
                : null}
        </div>
    )
}

export default Header