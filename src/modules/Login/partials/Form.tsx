import React from 'react'


const Form = () => {
  return (
    <div className='__login' >
      <form>
         
        <input placeholder='Enter your name' type='text' required />
        <input placeholder='Enter your email' type='email' required />
        <input placeholder='Enter password' type='email' required />

      </form>
    </div>
  )
}

export default Form