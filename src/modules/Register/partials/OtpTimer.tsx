import React, { useEffect, useState } from 'react'
//
import { regInitial } from '../config/constants';


const OtpTimer = ({ setRegData, setOtpSuccess, setOtp } : { setRegData : any, setOtpSuccess : any, setOtp : any }) => {
  const [minutes, setMinutes] = useState<number>(2);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }

      if(minutes == 0 && seconds == 0){
        setOtpSuccess(false)
        setRegData(regInitial)
        setOtp('')
      }

    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <>
        {seconds > 0 || minutes > 0 ? (
           <p className='flex items-center justify-end' >
                <span className='text-primary font-medium' > {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</span>
           </p>
        ) : <></>}
    </>
  )
}

export default OtpTimer