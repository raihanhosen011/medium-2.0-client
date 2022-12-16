export const login = () => async (dispatch: any) => {
  try {
    
    // dispatch({ type: AUTH,payload: res.data }).msg } })
    
  } catch (err: any) {
    dispatch({ type: '', payload: { errors: err.response.data.msg } })
  }
}