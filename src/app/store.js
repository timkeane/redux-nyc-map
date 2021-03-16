import { configureStore } from '@reduxjs/toolkit'
import mapReducer from '../features/map/mapSlice'
import locatorReducer from '../features/locator/locatorSlice'

export default configureStore({
  reducer: {
    map: mapReducer,
    locator: locatorReducer
  }
})
