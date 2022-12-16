"use client"

import { useState } from 'react'
import Link from 'next/link'
//
import { FormSubmit, InputChange, QueryTypes } from '@config/types'
import { usePost } from '@hooks/useFetch'
import { loginInitial } from '../config/constants'
import { ILogin } from '../config/types'
//
import Button from '@components/Button'


const Form = () => {
  // state
  const [loginData, setLoginData] = useState<ILogin>(loginInitial)

  // hooks
  const { mutate } : QueryTypes = usePost('/login', 'login')

  // handle input value 
  const handleChange = (e: InputChange) => {
    const { value, name } = e.target
    setLoginData({ ...loginData, [name] : value })
  }

  // handle submit all data
  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    mutate(loginData)
  }

  return (
    <div className='__login' >
      <form onSubmit={handleSubmit} >
         
        <input name="account" placeholder='Enter your email' onChange={handleChange} type='email' required />
        <input name='password' placeholder='Enter password' onChange={handleChange} type='text' required />

        <Button full > Sign in </Button>

        <p className='text-sm text-center mt-4' > Don't have account? <Link href='/register' className='text-primary ' > Sign up </Link> </p>

      </form>
    </div>
  )
}

export default Form