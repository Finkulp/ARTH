import React from "react";
import Home from "./components/Non-logged/Home";
import Navbar from "./components/Non-logged/Nevbar";
import Footer from "./components/Non-logged/Footer";
import {Routes,BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
