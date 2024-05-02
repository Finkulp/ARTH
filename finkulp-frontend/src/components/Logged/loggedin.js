import React from 'react'
import NevBar from './NevBar'
import Home from './Home'
import TradingStrategy from './TradingStrategy'
import TradingStrategyTemplateDescription from './TradingStrategyTemplateDescription'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
export default function Loggedin() {
  return (
    <>
    <NevBar></NevBar>
    <TradingStrategy></TradingStrategy>
    </>
  )
}
