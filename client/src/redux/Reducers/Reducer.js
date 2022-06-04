import {GET_CONTACTS} from '../Actions/ActionType'


const initialState={
    contacts : []
}

const Reducer = (state=initialState, action) => {
 switch (action.type) {
     case GET_CONTACTS:
         return {...state, contacts : action.paylaod.users }  
     default:
         return state
 }
}

export default Reducer