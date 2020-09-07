import React from 'react'

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout