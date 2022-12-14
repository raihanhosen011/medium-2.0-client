import React from 'react'
//
import Form from './partials/Form'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen' >
        
        <h1 className='font-playfair font-medium text-[28px]' > Well-come to poors Medium. </h1>
   
        <div className='mt-[58px]' >
          <Form />
        </div>
 
    </div>
  )
}

export default Login