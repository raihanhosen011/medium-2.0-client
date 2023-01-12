"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';
import OtpInput from 'react-otp-input';
//
import { FormSubmit, InputChange } from '@config/types'
import { regInitial } from '../config/constants'
import { IRegistration } from '../config/types'
//
import Button from '@components/Button'
import { usePost } from '@hooks/useFetch'
import { setRedux } from '@redux/action/global'
import ByLink from './ByLink'
import OtpTimer from './OtpTimer';


const Form = () => {
  // state
  const [regData, setRegData] = useState<IRegistration>(regInitial)
  const [otp, setOtp] = useState<string>('')

  const [afterSuccess, setAfterSuccess] = useState<boolean>(false)
  const [otpSuccess, setOtpSuccess] = useState<boolean>(false)

  const dispatch = useDispatch<any>()

  // hook
  const { mutate, isLoading, isError, isSuccess, error, data } = usePost('/register', 'register')
  const { mutate: otpMutate, isLoading: otpL, isError: otpE, isSuccess: otpSucc, error: otpErr, data: otpData } = usePost('/send-otp', 'sendOtp')

  const router = useRouter()

  // handle input value 
  const handleChange = (e: InputChange) => {
    const { value, name } = e.target
    setRegData({ ...regData, [name] : value })
  }
  
  // handle suvmit form
  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()

    if(regData.type === 'verify_code' && otp.length !== 5){
      otpMutate(regData)
    }else if(regData.type === 'verify_link'){
      mutate(regData)
    }else if(regData.type === 'verify_code' && otp.length === 5){
      mutate({ ...regData, otp : {_id: otpData?.data.otp_id, code: otp} })
    }
  }
  
  // use effect
  useEffect(() => {
    if(regData.type === 'verify_code' && otp.length !== 5){
      dispatch(setRedux(otpE, otpErr, otpData, otpSucc, undefined))
      if(otpSucc) setOtpSuccess(otpSucc)

    }else if(regData.type === 'verify_link'){
      dispatch(setRedux(isError, error, data, isSuccess, undefined))
      if(isSuccess) setAfterSuccess(isSuccess)

    }else if(regData.type === 'verify_code' && otp.length === 5){
      dispatch(setRedux(isError, error, data, isSuccess, undefined))
      if(isSuccess) router.replace('/')
    }
  }, [isError, isSuccess, error, data, otpL, otpSucc, otpErr, otpData])


  // handle OTP
  function handleOTP(otp: string){
    setOtp(otp)
  }

  return (
    <div id='__registration' >
      {afterSuccess ?
        
        <ByLink />

        :

        <div>
          <h1 className='font-playfair font-medium text-[28px] mb-10' > Join poors Medium. </h1>

          <form onSubmit={handleSubmit} >

            <input onChange={handleChange} value={regData.name} name="name" placeholder='Enter your name' type='text' required />
            <input onChange={handleChange} value={regData.account} name="account" placeholder='Enter your email' type='email' required />
            <input onChange={handleChange} value={regData.password} name="password" placeholder='Enter password' type='text' required />
            
            {otpSuccess ?
              <div className='__otp' >
                <OtpInput 
                  onChange={handleOTP}
                  value={otp}
                  numInputs={5}
                />

                <OtpTimer setOtpSuccess={setOtpSuccess} setOtp={setOtp} setRegData={setRegData} />
              </div>
            
            :

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
            }

            <Button disabled={otpSuccess && otp.length !== 5} loading={isLoading || otpL} full > {regData.type === 'verify_code' && otp.length !== 5 ? "Send OTP" : "Sign up"} </Button>

            <p className='text-sm text-center mt-4' > Already have an account? <Link href='/login' className='text-primary ' > Sign in </Link> </p>

          </form>      
        </div>        
      }
    </div>
  )
}

export default Form