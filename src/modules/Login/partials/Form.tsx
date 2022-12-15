import { useState } from 'react'
import Link from 'next/link'
//
import { FormSubmit, InputChange } from '@config/types'
import { loginInitial } from '../config/constants'
import { ILogin } from '../config/types'
//
import Button from '@components/Button'


const Form = () => {
  const [loginData, setLoginData] = useState<ILogin>(loginInitial)

  // handle input value 
  const handleChange = (e: InputChange) => {
    const { value, name } = e.target
    setLoginData({[name] : value})
  }

  // handle submit all data
  const handleSubmit = (e: FormSubmit) => {}


  return (
    <div className='__login' >
      <form onSubmit={handleSubmit} >
         
        <input name="email" placeholder='Enter your name' onChange={handleChange} type='email' required />
        <input name='text' placeholder='Enter password' onChange={handleChange} type='text' required />

        <Button full > Sign in </Button>

        <p className='text-sm text-center mt-4' > Don't have account? <Link href='/register' className='text-primary ' > Sign up </Link> </p>

      </form>
    </div>
  )
}

export default Form