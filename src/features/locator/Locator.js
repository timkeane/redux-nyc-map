import { useDispatch } from 'react-redux';
import styles from './Locator.module.css'
import Geoclient from 'nyc-lib/nyc/Geoclient'

let dispatch

const geocoder = new Geoclient({
  url: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example'
})

function search(event) {
  if (event.keyCode === 13) {
    console.warn(event.target.value)
    geocoder.search(event.target.value)
  }
}

function located(location) {
  dispatch({type: 'locator/located', payload: location})
}

function abiguous(possible) {
  dispatch({type: 'locator/abiguous', payload: possible})
}

geocoder.on('geocoded', located)
geocoder.on('abiguous', abiguous)


export function Locator() {
  dispatch = useDispatch()
  return (
    <input className={styles.locator} type="text" onKeyUp={search} placeholder="Search for a location..."></input>
  )
}