import React from 'react'

interface Props{
    title: String,
    description?: String
}

export const Header: React.FC<Props> = ({ title, description }) => {
    return (
        <div className="top-0 sticky bg-white">
            <p className="text-6xl font-semibold text-gray-900 trun">{ title }</p>
                {description ?
                    <div className='text-gray-600 text-lg'>
                        {description}
                    </div>
                : null}
        </div>
    )
}

export default Header