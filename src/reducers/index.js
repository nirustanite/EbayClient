import { combineReducers } from 'redux'
import user from './userReducer'
import createUser from './createUser'
import redirect from './redirect'

export default combineReducers({
  user,
  createUser,
  redirect
})