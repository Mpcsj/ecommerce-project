import {SET_CURRENT_USER} from './user.action.types'
import {REHYDRATE} from 'redux-persist'
const INITIAL_STATE={
    currentUser:null
}
const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case REHYDRATE:
            return state
        case SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload
            }
        default:
            return state
    }
}

export default userReducer