import { createSlice } from '@reduxjs/toolkit'

export const locatorSlice = createSlice({
  name: 'locator',
  initialState: {
    location: null
  },
  reducers: {
    located: (state, action) => {
      console.warn(state, action)
      state.location = action.payload
      console.warn(state, action)
    },
    abiguous: (state, action) => {
      console.warn(state, action)
    }
  }
})

export const { located, abiguous } = locatorSlice.actions

export const selectLocation = state => state.locator

export default locatorSlice.reducer
