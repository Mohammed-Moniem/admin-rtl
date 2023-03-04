import { createSlice } from '@reduxjs/toolkit'
import { clearStorage } from 'src/lib/helpers/storage'

const initialState = {
  user: null,
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
      clearStorage()
    },
  },
})

export default authSlice.reducer

const { login, setUser, logout } = authSlice.actions

export const authActions = {
  login,
  setUser,
  logout,
}
