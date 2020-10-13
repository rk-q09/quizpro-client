import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { signup, signout } from './authSlice'

export const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const onUsernameChange = e => setUsername(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const onSignupClicked = () => {
    if (username && email && password) {
      dispatch(
        signup({
          username,
          email,
          password
        })
      )

      setUsername('')
      setEmail('')
      setPassword('')
    }
  }

  const onSignoutClicked = () => {
    dispatch(signout())
  }


  return (
    <section>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="userName">UserName:</label>
        <input 
          type="text"
          id="userName"
          name="userName"
          value={username}
          onChange={onUsernameChange}
        />
        <label htmlFor="email">Email:</label>
        <input 
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
        />
        <button type="button" onClick={onSignupClicked}>
          Sign Up
        </button>
      </form>

      <h2>Sign out</h2>
      <button type="button" onClick={onSignoutClicked}>
        Sign out
      </button>
    </section>
  )
}