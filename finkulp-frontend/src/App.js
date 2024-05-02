import React from "react";
import Home from "./components/Non-logged/Home";
import Footer from "./components/Non-logged/Footer";
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import SignUP from './components/Non-logged/SignUP';
import Login from "./components/Non-logged/Login";
import Loggedin from "./components/Logged/loggedin";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<SignUP></SignUP>}></Route>
    <Route path='/loggedhome' element={<Loggedin></Loggedin>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
