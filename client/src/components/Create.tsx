import React from 'react'
import Header from './Header'
import Layout from './Layout'

export default function Create() {
    return (
        <div>
           <Header title='Create'/> 
            <Layout>
                <form>
                    <input type='text' />
                </form> 
           </Layout>
        </div>
    )
}
