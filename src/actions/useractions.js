import request from 'superagent';

const baseUrl = 'http://localhost:4000';


const userCreateSuccess = event => ({
    type: USER_CREATE_SUCCESS,
    event
})

export const redirect = () => ({
    type: REDIRECT,
    payload: {
        redirect:true
    }
})

export const changeEvent = (key, value) => {
    return {
         type: CHANGE_EVENT,
         payload:{
             [key]: value
         }
     }
 }

export const submitEvent = () => {
    return {
        type: SUBMIT_EVENT
    }
}

export const createUser = (data) => (dispatch) => {
    request
          .post(`${baseUrl}/signup`)
          .send(data)
          .then(response => dispatch(userCreateSuccess(response.body)))
          .catch(console.error)
}

export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const CHANGE_EVENT = 'CHANGE_EVENT';
export const SUBMIT_EVENT = 'SUBMIT_EVENT';
export const REDIRECT = 'REDIRECT'