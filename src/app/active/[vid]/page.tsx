"use client"

import React from 'react'
//
import { useGet } from '@hooks/useFetch'
//
import Success from '@modules/Active/Success'
import Faild from '@modules/Active/Faild'
import Loading from '@components/Loading'


export interface PostProps {
  params: {
    vid: string
  }
}

const Page = ({ params: { vid } }: PostProps) => {
  // hook
  const { isSuccess, isLoading } = useGet(`/active/${vid}`, 'active_acc')

  if(isLoading) <Loading />

  return (
    <div className='flex items-center justify-center text-center min-h-screen' >
      {isSuccess ? <Success /> : <Faild />}
    </div>
  )
}

export default Page