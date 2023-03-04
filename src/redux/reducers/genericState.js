import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isPromptOpen: false,
  lookups: {},
}

export const genericStateSlice = createSlice({
  name: 'genericStateSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setPrompt: (state, action) => {
      state.isPromptOpen = action.payload
    },
    setLookups: (state, action) => {
      state.lookups = action.payload
    },
  },
})

export default genericStateSlice.reducer

const { setLoading, setPrompt, setLookups } = genericStateSlice.actions

export const genericStateActions = {
  setLoading,
  setPrompt,
  setLookups,
}
