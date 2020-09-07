import React from 'react'

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="layout w-max-sm max-h-full">
            {children}
        </div>
    )
}

export default Layout