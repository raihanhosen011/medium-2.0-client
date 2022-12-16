import { Dispatch } from "redux"
import { GLOBAL_TYPES } from "@redux/types"


// set data --
export const setRedux = ( isError ?: boolean, error ?: any, data ?: any, isSuccess ?: boolean, action ?: string ) => async (dispatch: Dispatch) => {
  try {

    // @ts-ignore
    if(data) dispatch({ type: GLOBAL_TYPES[action], payload: data?.data })
    if(isError) dispatch({ type: GLOBAL_TYPES.ALERT, payload: { status: "error", message: error.response?.data.msg } })
    if(isSuccess) dispatch({ type: GLOBAL_TYPES.ALERT, payload: { status: "success", message: data?.data.msg } })
    
  } catch (err: any) {
    dispatch({ type: GLOBAL_TYPES.ALERT, payload: { status: "error", message: err.response.data.msg } })
  }
}