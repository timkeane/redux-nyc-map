import React, { useReducer, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './Map.module.css'
import Basemap from 'nyc-lib/nyc/ol/Basemap'
import reducer from './mapSlice'

let initialized = false

export function Map() {
  const domRef = React.createRef()
  const [state, dispatch] = useReducer(reducer, {map: null})
  useLayoutEffect(() => {
    const map = new Basemap({target: ReactDOM.findDOMNode(domRef.current)})
    if (!initialized) {
      initialized = true
      map.on('moveend', event => {
        dispatch({type: 'map/moveend', payload: event})
      })
      dispatch({type: 'map/initMap', payload: map})
    }
  })
  return <div ref={domRef} className={styles.map}></div>
}