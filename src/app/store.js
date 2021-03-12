import { configureStore } from '@reduxjs/toolkit'
import mapReducer from '../features/map/mapSlice'

export default configureStore(
  {
    reducer: {
      map: mapReducer
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
