import React from 'react'

interface Error{
    error: string
}

const Error: React.FC<Error> = ({ error }) => {
    return (
        <div>
            <div className='errorContainer'>
                { error }
            </div>
        </div>
    )
}

export default Error
