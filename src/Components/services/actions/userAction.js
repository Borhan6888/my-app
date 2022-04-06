import {users_request, get_users_failed, get_users_success} from '../types'
import axius from axius;

export const usersList = () => {
    return async (dispatch) => {
        try {
           dispatch({
               type: users_request
           }) 
           const res = await axius.get('https://jsonplaceholder.typicode.com/posts')
           console.log(res.data)
           dispatch({
               type: get_users_success,
               payload: res.data
           })
        } catch (error) {
            dispatch({
                type: get_users_failed,
                payload: error.message
            })
        }
    }
}




