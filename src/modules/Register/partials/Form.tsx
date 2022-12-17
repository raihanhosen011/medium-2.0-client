"use client"

import React, { useState } from 'react'
import Link from 'next/link'
//
import { FormSubmit, InputChange } from '@config/types'
import { regInitial } from '../config/constants'
import { IRegistration } from '../config/types'
//
import Button from '@components/Button'


const Form = () => {
  // state
  const [regData, setRegData] = useState<IRegistration>(regInitial)

  // handle input value 
  const handleChange = (e: InputChange) => {
    const { value, name } = e.target
    setRegData({ ...regData, [name] : value })
  }
  
  // handle suvmit form
  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
  }

  return (
    <div className='__login' >
      <h1 className='font-playfair font-medium text-[28px]' > Join poors Medium. </h1>

      <form onSubmit={handleSubmit} >

        <input onChange={handleChange} name="name" placeholder='Enter your name' type='text' required />
        <input onChange={handleChange} name="account" placeholder='Enter your email' type='email' required />
        <input onChange={handleChange} name="password" placeholder='Enter password' type='text' required />
        
        <div className='flex items-center justify-between mb-5 text-gray-700 mx-3' >
          <h2> Verify mail via </h2>

          <div className='flex gap-4' >
            <div>
               <input onChange={handleChange} type='radio' value='verify_link' name='type' required />
               <label> Link </label>  
            </div>

            <div>
               <input onChange={handleChange} type='radio' value='verify_code' name='type' defaultChecked required />
               <label> Code </label>  
            </div>
          </div>
        </div>

        <Button full > Sign up </Button>

        <p className='text-sm text-center mt-4' > Already have an account? <Link href='/login' className='text-primary ' > Sign in </Link> </p>

      </form>
    </div>
  )
}

export default Form