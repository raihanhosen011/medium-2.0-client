import React from 'react'
import Link from 'next/link'
//
import Button from '@components/Button'


const Form = () => {
  return (
    <div className='__login' >
      <form>
         
        <input placeholder='Enter your name' type='text' required />
        <input placeholder='Enter password' type='text' required />

        <Button full > Sign in </Button>

        <p className='text-sm text-center mt-4' > Don't have account? <Link href='/register' className='text-primary ' > Sign up </Link> </p>

      </form>
    </div>
  )
}

export default Form