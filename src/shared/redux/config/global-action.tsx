import React, { useEffect } from 'react'
import toast ,{ Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
//
import { IReducer } from '@config/types'
import { GLOBAL_TYPES } from '@redux/types'

const GlobalActions = () => {
  // redux hook
  const dispatch = useDispatch()
  const { alert, auth } = useSelector((state: IReducer) => state.global)
  
  // oparaton to show alert
  useEffect(() => {
    if (alert.status) {
      if (alert.status == 'error') {
        toast.error(alert.message)
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { status: '', message: '' } });
      }

      else if (alert.status == 'success') {
        toast.success(alert.message)
        dispatch({ type: GLOBAL_TYPES.ALERT, payload: { status: '', message: '' } });
      };
    }
  }, [alert]);

  console.log(auth)

  return (
    <>
      <Toaster />  
    </>
  )
}

export default GlobalActions