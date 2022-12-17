"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
//
import { FormSubmit, InputChange, QueryTypes } from '@config/types'
import { usePost } from '@hooks/useFetch'
import { loginInitial } from '../config/constants'
import { ILogin } from '../config/types'
//
import Button from '@components/Button'
import { setRedux } from '@redux/action/global'


const Form = () => {
  // state
  const [loginData, setLoginData] = useState<ILogin>(loginInitial)
  const dispatch = useDispatch<any>()

  // hooks
  const { mutate, data, isError, error, isSuccess, isLoading } : QueryTypes = usePost('/login', 'login')

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

  useEffect(() => {
    dispatch(setRedux(isError, error, data, isSuccess, "AUTH"))
  }, [data, isError, error, isSuccess])

  return (
    <div className='__login' >
      <form onSubmit={handleSubmit} >
         
        <input name="account" placeholder='Enter your email' onChange={handleChange} type='email' required />
        <input name='password' placeholder='Enter password' onChange={handleChange} type='text' required />

        <Button loading={isLoading} full > Sign in </Button>

        <p className='text-sm text-center mt-4' > Don't have account? <Link href='/register' className='text-primary ' > Sign up </Link> </p>

      </form>
    </div>
  )
}

export default Form