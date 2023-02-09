import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  errorMessage: '',
  isAuthenticated: false
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.errorMessage = ''
    }
  }
})

export const { login, logout } = authSlice.actions
