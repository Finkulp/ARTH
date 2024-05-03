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
import TradingStrategy from "./components/Logged/TradingStrategy";

function App() {
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
            <Route path='zerodtha' element={<Zerodha />}></Route>
            <Route path='Alice-Blue' element={<AliceBlu />}></Route>
            <Route path="Upstocks" element={<Upstocks />}></Route>
            <Route path="Angle-One" element={<AngleOne />}></Route>
            <Route path="Kotak" element={<Kotak />}></Route>
            <Route path="Motilal" element={<Motilal />}></Route>
            <Route path="5paisa" element={<Paisa />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
