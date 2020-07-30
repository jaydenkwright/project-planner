import React from 'react'
import Header from './Header'
import Layout from './Layout'

export const CreatePhase: React.FC = () => {
    return (
        <div>
            <Header title='Create'/>
            <Layout>
                <div className='mx-auto py-16'>
                    <form>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Name</label>
                        <input type='text' className='rounded-lg mb-1 py-2 px-2 w-64 shadow-sm outline-none focus:shadow-outline block' maxLength={100} required />
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Description</label>
                        <textarea className='w-64 h-20 rounded-lg py-2 px-2 shadow-sm outline-none focus:shadow-outline block'  maxLength={200}/>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Category</label>
                        <select className='w-64 px-2 py-2 rounded-lg shadow-sm outline-none focus:shadow-outline block'>
                            <option value='Programming'>Programming</option>
                            <option value='Web devlopment'>Web devlopment</option>
                            <option value='Design'>Design</option>
                            <option value='Writing'>Writing</option>
                            <option value='Architecture'>Architecture</option>
                            <option value='Marketing'>Marketing</option>
                            <option value='Art'>Art</option>
                            <option value='Video'>Video</option>
                        </select>
                        <label className='block mt-1 mb-1 text-gray-700 px-1 font-semibold'>Due By</label>
                        <input type='date' className='w-64 px-2 py-2 rounded-lg shadow-sm outline-none focus:shadow-outline block'/>
                        <input type='submit' className='block px-2 py-2 mt-2 rounded-lg bg-green-500 text-white shadow-sm font-semibold'/>
                    </form> 
                </div>
            </Layout>
        </div>
    )
}

export default CreatePhase