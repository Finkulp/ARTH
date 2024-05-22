import React from "react";
import Home from "./components/Non-logged/Home";
import Footer from "./components/Non-logged/Footer";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import SignUP from './components/Non-logged/SignUP';
import Login from "./components/Non-logged/Login";
import Loggedin from "./components/Logged/loggedin";
import Pricing from "./components/Logged/Pricing";
import FAQlogged from "./components/Logged/FAQ";
import Mycouresmain from "./components/Logged/courses/MyCourses/Mycouresmain";
import ExploreCourses from "./components/Logged/courses/ExploreCourses/ExploreCourses";
import ExploreCoursesDetails from "./components/Logged/courses/ExploreCourses/ExploreCoursesDetails";
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
import Courses from "./components/Logged/courses/Courses";
import TradingStrategyAdmin from "./components/Admin/TradingStrategy";
import TradingStrategyfrom from "./components/Admin/TradingStrategy/TradingStrategyfrom";
import AddNewStrategy from "./components/Admin/TradingStrategy/Add_New_Strategy";
import UpdatingAlgo from "./components/Admin/Algo/UpdatingAlgo";
import UpdateAlgo from "./components/Admin/Algo/UpdateAlgo";
import CreateNewAlgo from "./components/Admin/+Algo.js/CreateNewAlgo";
import Members from "./components/Admin/Members/Memberss";
import MemberDetailsPage from "./components/Admin/Members/MembersDetails";
import AddnewMember from "./components/Admin/Members/Add_new_Member";
import { useState } from "react";
import EditDetails from "./components/Admin/Members/Edit_Details";
import Checkout from "./components/Logged/Checkout/checkout";
import PythonData from "./components/python";
function App() {
  // const [dark,setdark]=useState({
  //   color:"white",
  //   background:"black"
  // })
  const[checkout,setchekout]=useState("");
  const[tradingStrategy,settradingStrategy]=useState("");
  const[VeiwAlgo,setViewAlgo]=useState("");
  const[editAlgo,seteditAlgo]=useState("");
  const[member,setMember]=useState("");
  const[MemberDetails,setMemberDetails]=useState("");
  const[exploreCourses,setExploreCourses]=useState("");
  const[sum,setsum]=useState(0);
  const[added,setadded]=useState(false);
  return (
    <>
      <BrowserRouter>
      <PythonData></PythonData>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUP />}></Route>
          <Route path='/loggedhome' element={<Loggedin />}>
            <Route path="tradingStrategy" element={<TradingStrategy></TradingStrategy>}></Route>
            <Route path="subscription" element={<Pricing />}></Route>
            <Route path="faqlogged" element={<FAQlogged />}></Route>
            <Route path='courses' element={<Courses></Courses>}>
              <Route path="my-courses" element={<Mycouresmain />}></Route>
              <Route path='' element={<ExploreCourses setExploreCourses={setExploreCourses} />}></Route>
              <Route path='ExploreCoursesDetails' element={<ExploreCoursesDetails exploreCourses={exploreCourses}></ExploreCoursesDetails>}></Route>
            </Route>
            <Route path='Add-Broker' element={<AddedBroker></AddedBroker>}></Route>
            <Route path='zerodtha' element={<Zerodha />}></Route>
            <Route path='Alice-Blue' element={<AliceBlu />}></Route>
            <Route path="Upstocks" element={<Upstocks />}></Route>
            <Route path="Angle-One" element={<AngleOne />}></Route>
            <Route path="Kotak" element={<Kotak />}></Route>
            <Route path="Motilal" element={<Motilal />}></Route>
            <Route path="5paisa" element={<Paisa />}></Route>
           
            <Route path="MarketPlace" element={<MarketPlace></MarketPlace>}>
              <Route path="" element={<Algoshopping setViewAlgo={setViewAlgo} ></Algoshopping>}></Route>
              <Route path="AlgoDescription" element={<AlgoshoppingDescription VeiwAlgo={VeiwAlgo} setchekout={setchekout} setsum={setsum} sum={sum} added={added} setadded={setadded} ></AlgoshoppingDescription>}></Route>
              <Route path="MyStrategy" element={<MyStrategies ></MyStrategies>}></Route>
              <Route path="Trade" element={<Trades></Trades>}></Route>
            </Route>
            <Route path='' element={<Dashboard setViewAlgo={setViewAlgo}></Dashboard>}></Route>
            <Route path='Checkout' element={<Checkout checkout={checkout} setsum={setsum} sum={sum} setchekout={setchekout} added={added} setadded={setadded} ></Checkout>}></Route>
          </Route>
          <Route path='/adminhome' element={<AdminHome />}>
            <Route path="" element={<TradingStrategyAdmin settradingStrategy={settradingStrategy}></TradingStrategyAdmin>}></Route>
            <Route path='edit-Strategy' element={<TradingStrategyfrom tradingStrategy={tradingStrategy} settradingStrategy={settradingStrategy}></TradingStrategyfrom>}></Route>
            <Route path='addnewstrategy' element={<AddNewStrategy></AddNewStrategy>}></Route>
            <Route path='updatingAlgo' element={<UpdatingAlgo seteditAlgo={seteditAlgo}></UpdatingAlgo>}></Route>
            <Route path="UpdateAlgo" element={<UpdateAlgo editAlgo={editAlgo}></UpdateAlgo>}></Route>
            <Route path='CreateNewAlgo' element={<CreateNewAlgo></CreateNewAlgo>}></Route>
            <Route path='Members' element={<Members setMember={setMember} setMemberDetails={setMemberDetails}></Members>}></Route>
            <Route path="Member_Details" element={<MemberDetailsPage member={member}></MemberDetailsPage>}></Route>
            <Route path='addnewmember' element={<AddnewMember></AddnewMember>}></Route>
            <Route path='editdetails' element={<EditDetails member={MemberDetails}></EditDetails>}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
