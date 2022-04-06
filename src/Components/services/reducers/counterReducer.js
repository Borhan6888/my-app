import {increment_value, decrement_value} from '../types'


const initialState = {
    connt: 5
}

export default function(state = initialState, action){
    switch(action.type){
        case increment_value:
            return{
                ...state,
                count: state.connt + action.payload
            }
        case decrement_value:
            return{
                ...state,
                count: state.connt - action.payload
            }
        default:
            return state;
    }
}



