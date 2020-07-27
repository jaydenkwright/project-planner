import React from 'react'

interface Props{
    title: String
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <div className="top-0 sticky bg-white">
            <p className="text-6xl font-semibold text-gray-900">{ title }</p>
        </div>
    )
}

export default Header