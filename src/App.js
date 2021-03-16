import React from 'react';
import { Map } from './features/map/Map';
import { Locator } from './features/locator/Locator';
import './App.css';

function App() {
  return (
    <div>
      <Map />
      <Locator />
    </div>
  );
}

export default App;
