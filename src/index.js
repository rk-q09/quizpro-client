import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './app/store'
import { Provider } from 'react-redux'

import { SignupForm } from './features/auth/Signup'

ReactDOM.render(
  <Provider store={store}>
      <App />
      <SignupForm />
  </Provider>,
  document.querySelector('#root')
)