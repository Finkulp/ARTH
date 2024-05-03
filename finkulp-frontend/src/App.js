import React from "react";
import Home from "./components/Non-logged/Home";
import Footer from "./components/Non-logged/Footer";
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import SignUP from './components/Non-logged/SignUP';
import Login from "./components/Non-logged/Login";
import Loggedin from "./components/Logged/loggedin";
import Pricing from "./components/Logged/Pricing";
import FAQlogged from "./components/Logged/FAQ";
import Mycoures from "./components/Logged/MyCourses/Mycoures";
import ExploreCourses from "./components/Logged/ExploreCourses/ExploreCourses";
import Zerodha from "./components/Logged/AddBroker/zerodtha";
import AliceBlu from "./components/Logged/AddBroker/AliceBlue";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<SignUP></SignUP>}></Route>
    <Route path='/loggedhome' element={<Loggedin></Loggedin>}></Route>
    <Route path="/subscription" element={<Pricing></Pricing>}></Route>
    <Route path="/faqlogged" element={<FAQlogged></FAQlogged>}></Route>
    <Route path="/my-courses" element={<Mycoures></Mycoures>}></Route>
    <Route path='/explore-courses' element={<ExploreCourses></ExploreCourses>}></Route>
    <Route path='/zerodtha' element={<Zerodha></Zerodha>}></Route>
    <Route path='/Alice-Blue' element={<AliceBlu></AliceBlu>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
