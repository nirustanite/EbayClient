import {USER_CREATE_SUCCESS} from '../actions/useractions'


const reducer = (state = [], action={}) => {
    switch(action.type){
        case USER_CREATE_SUCCESS:
            return [...state,action.event]
        default:
            return state
    }
}


export default reducer;