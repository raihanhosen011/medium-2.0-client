import React from 'react'
import Link from 'next/link'
//
import Button from '@components/Button'


const Form = () => {
  return (
    <div className='__login' >
      <form>
         
        <input placeholder='Enter your name' type='text' required />
        <input placeholder='Enter your email' type='email' required />
        <input placeholder='Enter password' type='text' required />
        
        <div className='flex items-center justify-between mb-5 text-gray-700 mx-3' >
          <h2> Verify mail via </h2>

          <div className='flex gap-4' >
            <div>
               <input type='radio' value='by_link' name='type' defaultChecked required />
               <label> Link </label>  
            </div>

            <div>
               <input type='radio' value='by_code' name='type' required />
               <label> Code </label>  
            </div>
          </div>
        </div>

        <Button full > Sign up </Button>

        <p className='text-sm text-center mt-4' > Don't have account? <Link href='/register' className='text-primary ' > Sign up </Link> </p>

      </form>
    </div>
  )
}

export default Form