import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    map: null
  },
  reducers: {
    initMap: (state, action) => {
      state.map = action.payload
    },
    moveend: (state, action) => {
      console.warn(state.map)
    }
  }
})

export const { initMap, moveend } = mapSlice.actions

export const selectMap = state => state.map

export default mapSlice.reducer
