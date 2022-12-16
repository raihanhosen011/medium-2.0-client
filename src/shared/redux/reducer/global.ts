import { GLOBAL_TYPES } from '../types';

const initialState = {
  auth : {},
  alert : { status : "", message : "" }
}

const authReducer = (state: any = initialState, action: any): any => {
  switch (action.type){
    case GLOBAL_TYPES.AUTH:
      return action.payload

    default:
      return state
  }
}

export default authReducer;