import { createSlice } from '@reduxjs/toolkit'

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    map: null
  },
  reducers: {
    initMap: (state, action) => {
      console.warn('before setting map state', state.map)
      state.map = action.payload
      console.warn('after setting map state', state.map)
    },
    moveend: (state, action) => {
      console.warn(state, action)
    }
  }
})

export const { initMap, moveend } = mapSlice.actions

export const selectMap = state => state.map.map

export default mapSlice.reducer
