import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// Slice
const initialState = {
  user: localStorage.getItem('token') ?
          localStorage.getItem('token') :
          null,
  errorMessage: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload
    },
    signoutUser: (state, action) => {
      state.user = null
      localStorage.removeItem('token')
    },
    authError: (state, action) => {
      state.errorMessage = action.payload
    }
  }
})

export default authSlice.reducer

const { authUser, signoutUser, authError } = authSlice.actions

export const signup = ({username, email, password}) => async dispatch => {
  try {
    const res = await axios.post(
      'api/users/signup', 
      {username, email, password}
    )
    const JWT = res.data.token
    const userName = res.data.user.username
    dispatch(authUser(userName))
    localStorage.setItem('token', JWT)
  } catch (e) {
    return dispatch(authError(e.message))
  }
}

export const signout = () => dispatch => {
  dispatch(signoutUser())
}

export const signin = ({email, password}) => async dispatch => {
  try {
    const res = await axios.post(
      'api/users/signin', 
      {email, password}
    )
    const JWT = res.data.token
    const userName = res.data.user.username
    dispatch(authUser(userName))
    localStorage.setItem('token', JWT)
  } catch (e) {
    return dispatch(authError(e.message))
  }
}