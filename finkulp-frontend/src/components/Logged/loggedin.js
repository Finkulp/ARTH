import React from 'react'
import NevBar from './NevBar'
import Home from './Home'
import TradingStrategy from './TradingStrategy'
export default function Loggedin() {
  return (
    <div>
      <NevBar></NevBar>
      <Home name="Arun Rathaur"></Home>
      <TradingStrategy></TradingStrategy>
    </div>
  )
}
