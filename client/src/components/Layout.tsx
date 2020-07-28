import React from 'react'

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-wrap w-max-sm bg-gray-200 rounded-lg h-max-sm pb-64">
            {children}
        </div>
    )
}

export default Layout