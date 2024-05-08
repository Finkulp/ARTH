import React from "react";
import Home from "./components/Non-logged/Home";
import Footer from "./components/Non-logged/Footer";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import SignUP from './components/Non-logged/SignUP';
import Login from "./components/Non-logged/Login";
import Loggedin from "./components/Logged/loggedin";
import Pricing from "./components/Logged/Pricing";
import FAQlogged from "./components/Logged/FAQ";
import Mycoures from "./components/Logged/MyCourses/Mycoures";
import ExploreCourses from "./components/Logged/ExploreCourses/ExploreCourses";
import Zerodha from "./components/Logged/AddBroker/zerodtha";
import AliceBlu from "./components/Logged/AddBroker/AliceBlue";
import Paisa from "./components/Logged/AddBroker/5paisa";
import AngleOne from "./components/Logged/AddBroker/AngleOne";
import Kotak from "./components/Logged/AddBroker/Kotak";
import Motilal from "./components/Logged/AddBroker/Motilal";
import Upstocks from "./components/Logged/AddBroker/Upstock";
import AddedBroker from "./components/Logged/AddBroker/AddedBroker";
import TradingStrategy from "./components/Logged/TradingStrategy";
import MarketPlace from "./components/Logged/AlgoShopping/MarketPlace";
import Dashboard from './components/Logged/DashBoard/Dashboard';
import Algoshopping from "./components/Logged/AlgoShopping/Algoshopping";
import AlgoshoppingDescription from "./components/Logged/AlgoShopping/AlgoshoppingDescription";
import MyStrategies from './components/Logged/AlgoShopping/MyStrategies/MyStrategy';
import Trades from "./components/Logged/AlgoShopping/Trades/Trades";
import AdminHome from "./components/Admin/AdminHome";
import { useState } from "react";
function App() {
  const [dark,setdark]=useState({
    color:"white",
    background:"black"
  })
  const[VeiwAlgo,setViewAlgo]=useState("");
  const [viewMyAlog,setViewMyAlog]=useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUP />}></Route>
          <Route path='/loggedhome' element={<Loggedin />}>
            <Route path="tradingStrategy" element={<TradingStrategy></TradingStrategy>}></Route>
            <Route path="subscription" element={<Pricing />}></Route>
            <Route path="faqlogged" element={<FAQlogged />}></Route>
            <Route path="my-courses" element={<Mycoures />}></Route>
            <Route path='explore-courses' element={<ExploreCourses />}></Route>
            <Route path='Add-Broker' element={<AddedBroker></AddedBroker>}>
                <Route path='zerodtha' element={<Zerodha />}></Route>
                <Route path='Alice-Blue' element={<AliceBlu />}></Route>
                <Route path="Upstocks" element={<Upstocks />}></Route>
                <Route path="Angle-One" element={<AngleOne />}></Route>
                <Route path="Kotak" element={<Kotak />}></Route>
                <Route path="Motilal" element={<Motilal />}></Route>
                <Route path="5paisa" element={<Paisa />}></Route>
            </Route>
           
            <Route path="MarketPlace" element={<MarketPlace></MarketPlace>}>
              <Route path="" element={<Algoshopping setViewAlgo={setViewAlgo}></Algoshopping>}></Route>
              <Route path="AlgoDescription" element={<AlgoshoppingDescription VeiwAlgo={VeiwAlgo}></AlgoshoppingDescription>}></Route>
              <Route path="MyStrategy" element={<MyStrategies setViewMyAlog={setViewMyAlog}></MyStrategies>}></Route>
              <Route path="Trade" element={<Trades></Trades>}></Route>
            </Route>
            <Route path='Dashboard' element={<Dashboard setViewAlgo={setViewAlgo}></Dashboard>}></Route>
          </Route>
          <Route path='/adminhome' element={<AdminHome />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
