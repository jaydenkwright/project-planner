import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { UserInterface } from './Interfaces/UserInterface'
import Header from './Header'
import Layout from './Layout'
import Error from './Error'
import axios from 'axios'

const Settings: React.FC = () => {
    const history = useHistory()
    const [user, setUser] = useState<UserInterface>()
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('http://localhost:5000/user', {
                withCredentials: true
            })
            setUser(res.data)
        }
        getUser()
    }, [])


    const submit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
        e?.preventDefault()
        const updateUser = async () => {
            try{
                const res = await axios.put('http://localhost:5000/user/update', {
                    firstName: firstName ? firstName : user?.firstName,
                    lastName: lastName ? lastName : user?.lastName,
                    email: email ? email : user?.email,
                    password
                }, {
                    withCredentials: true
                })
                if (res.data){
                    history.push('/')
                }
            }catch(err){
                setError(err.response.data.msg)
            }
        }
        updateUser()
    }
    return (
        <div>
            <Header title='Settings' />
            <Layout>
                <div className='mx-auto py-16'>
                    { error ? <Error error={error}/> : null}
                    <form onSubmit={submit}>
                        <label className='textboxLabel'>First Name</label>
                        <input placeholder={user?.firstName} type='text' className='textbox' maxLength={100} onChange={(e) => setFirstName(e.target.value)}/>
                        <label className='textboxLabel'>Last Name</label>
                        <input placeholder={user?.lastName} type='text' className='textbox' maxLength={100} onChange={e => setLastName(e.target.value)} />
                        <label className='textboxLabel'>Email</label>
                        <input placeholder={user?.email} type='text' className='textbox' maxLength={100} onChange={e => setEmail(e.target.value)}/>
                        <label className='textboxLabel'>Password</label>
                        <input type='password' className='textbox' maxLength={100} required onChange={e => setPassword(e.target.value)}/>
                        <input type='submit' className='submitBtn' value='Submit' />
                    </form> 
                </div>
            </Layout>
        </div>
    )
}

export default Settings
