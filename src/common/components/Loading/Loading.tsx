import React from 'react'
import Spinner from '@components/Spinner'

const Loading = () => {
  return (
    <div className='fixed flex items-center justify-center bg-slate-300 w-full top-0 bottom-0' >
       <Spinner /> 
    </div>
  )
}

export default Loading