import React from 'react'

export const CreateTask = () => {
    return (
        <form>
            <textarea className='w-full bg-gray-300 rounded-lg px-2 py-2 shadow-sm' placeholder='Enter a new task...'></textarea>
            <input type='submit' className='block px-2 py-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold' />
        </form>
    )
}

export default CreateTask
