import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import State from './Components/State';
import State1 from './Components/State1';
import Button from './Components/Button';
import Data from './Components/Data';
import Count from './Components/Count';
import Filter from './Components/Filter';
import Loginform from './Components/Loginform';
import Signup from './Components/Signup';
import Fetch from './Components/Fetch';
import Access from './Components/Access';
import Useref from './Components/Useref';
import Sampleobject from './Components/Sampleobject';
import Textbox from './Components/Textbox';
import Todolist from './Components/Todolist';
import Controlled from './Components/Controlled';
import Uncontrolled from './Components/Uncontrolled';
import Hook from './Components/Hook';
import HooksCount from './Components/HooksCount';
import UseStatehook from './Components/UseStatehook';
import UseStateInterval from './Components/UseStateInterval';
import UseStateaxi from './Components/UseStateaxi';
import Site from './Components/Site';
import Pra from './Components/Pra';
import Squarebox from './Components/Squarebox';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddTodos from './Components/AddTodos';
import Fetchtable from './Components/Fetchtable';
import Usecontext from './Components/Usecontext';
import Refuser from './Components/Refuser';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import UseCallback from './Components/UseCallback';
import UseMemo from './Components/UseMemo';
import CountClearInterval from './Components/CountClearInterval';
import Arrowfunction from './Components/Arrowfunction';
import Calculator from './Components/Calculator';
import Loginpage from './Components/Loginpage';
import ProductDisplay from './Components/ProductDisplay';
import UseEffectclass from './Components/UseEffectclass';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import FakeApi from './Components/FakeApi';
import DummyData from './Components/DummyData';
import Loginpagevalidation from './Components/Loginpagevalidation';
import WeatherDashboard from './Components/WeatherDashboard';
import Navbar from './Components/Navbar';
// import Heading from './Components/Heading';
// HeroSection
import ServiceSection from './Components/Servicesection';
// import Footersection from './Components/Footersection';
import Keyvalues from './Components/Keyvalues';
import PracticeWebsite from './Components/PracticeWebsite';
import Statefull from './Components/Statefull';
import Practice from './Components/Practice';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import Typometer from './Components/Typometer';
import Buttons from './Components/Buttons';
import Textfileds from './Components/Textfileds';
import Nav from './Components/Nav';
import Tabsmaterialui from './Components/Tabsmaterialui';
import Cardmaterialui from './Components/Cardmaterialui';
import Listitemsmaterialui from './Components/Listitemsmaterialui';
import Navabarmaterialui from './Components/Navabarmaterialui';
import Mediaqueriesmaterialui from './Components/Mediaqueriesmaterialui';
import HeroSection from './Components/HeroSection';
import Navabarport from './Components/Navabarport';
import Portfolio from './Components/Portfolio';
import Service from './Components/Service';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Jsxfile from './Components/Jsxfile';
// import LoginPagecode from './Components/LoginPagecode'





const App = () => {
  return (
    <div>
      <BrowserRouter>
{/* <Navabarport /> */}
      <Routes>
       <Route path="/Navabarport" element ={<Navabarport/>}/>

        <Route path="/home" element={<Home/>}/>
        <Route path="/homee" element={<Home1/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/state1" element={<State1/>}/>
        <Route path="/button" element={<Button/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/count" element={<Count/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/loginform" element={<Loginform/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
        <Route path="/axios" element={<Access/>}/>
        <Route path="/useref" element={<Useref/>}/>
       <Route path="/sampleobject" element={<Sampleobject/>}/>
       <Route path="/textbox" element={<Textbox/>}/>
        <Route path="/Todolist" element={<Todolist/>}/>
        <Route path="/controlled" element={<Controlled/>}/>
        <Route path="/uncontrolled" element={<Uncontrolled/>}/>
        <Route path="/Statefull" element={<Statefull/>}/>
        <Route path="/hook" element={<Hook/>}/>
        <Route path="/hookscount" element={<HooksCount/>}/>
        <Route path="/UseStatehook" element={<UseStatehook/>}/>
        <Route path="/UseStateInterval" element={<UseStateInterval/>}/> 
        <Route path="/UseStateaxi" element={<UseStateaxi/>}/> 
        <Route path="/site" element={<Site/>}/> 
        <Route path="/pra" element={<Pra/>}/>
        <Route path="/Squarebox" element={<Squarebox/>}/>
        <Route path="/Todos" element={<Todos/>}/>
        <Route path="/Header" element={<Header />}/>
        <Route path="/AddTodos" element={<AddTodos/>}/>
        <Route path="/Fetchtable" element={<Fetchtable/>}/>
        <Route path="/usecontext" element={<Usecontext/>}/>
        <Route path="/Refuser" element={<Refuser/>}/>
         <Route path="/UseState" element={<UseState/>}/>
        <Route path="/UseEffect" element={<UseEffect/>}/>
        <Route path="/UseCallback" element={<UseCallback/>}/>
        <Route path="/UseMemo" element={<UseMemo/>}/>
        <Route path="/CountClearInterval" element={<CountClearInterval/>}/>
        <Route path="/Arrowfunction" element={<Arrowfunction/>}/>
        <Route path="/Calculator" element={<Calculator/>}/>
        <Route path="/Loginpage" element={<Loginpage/>}/>
        <Route path="/ProductDisplay" element={<ProductDisplay/>}/>
        <Route path="/UseEffectclass" element={<UseEffectclass/>}/>
        <Route path="/Productlist" element={<ProductList/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/FakeApi" element={<FakeApi/>}/>
        <Route path="/Dummydata" element={<DummyData/>}/>
        <Route path="/Loginpagevalidation" element={<Loginpagevalidation/>}/>
        <Route path="/WeatherDashboard" element={<WeatherDashboard/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        {/* <Route path="/Heading" element={<Heading/>}/> */}
        {/* <Route path="/Aboutsection" element={<Aboutsection/>}/> */}
        <Route path="/Servicesection" element={<ServiceSection/>}/>
        {/* <Route path="/Footersection" element={<Footersection/>}/> */}
        <Route path ="/Keyvalues" element={<Keyvalues/>}/>
        <Route path ="/PracticeWebsite" element={<PracticeWebsite/>}/>
        <Route path ="/Practice" element={<Practice/>}/>
        <Route path ="/Dashboard" element={<Dashboard/>}/>
       <Route path="/Sidebar" element ={<Sidebar/>}/>
       <Route path="/Typometer" element ={<Typometer/>}/>
       <Route path="/Buttons" element ={<Buttons/>}/>
       <Route path="/Textfileds" element ={<Textfileds/>}/>
       <Route path="/Nav" element ={<Nav/>}/>
       <Route path="/Tabsmaterialui" element ={<Tabsmaterialui/>}/>
       <Route path="/Cardmaterialui" element ={<Cardmaterialui/>}/>
       <Route path="/Listitemsmaterialui" element ={<Listitemsmaterialui/>}/>
       <Route path="/Navabarmaterialui" element ={<Navabarmaterialui/>}/>
       <Route path="/Mediaqueriesmaterialui" element ={<Mediaqueriesmaterialui/>}/>
       <Route path="/HeroSection" element ={<HeroSection/>}/>
       <Route path="/Portfolio" element ={<Portfolio/>}/>
       <Route path="/service" element ={<Service/>}/>
       <Route path="/experience" element ={<Experience/>}/>
       <Route path="/project" element ={<Project/>}/>
       <Route path="/education" element ={<Education/>}/>
       <Route path="/contact" element ={<Contact/>}/>
       <Route path="/Jsxfile" element ={<Jsxfile/>}/>
       {/* <Route path="/LoginPagecode" element ={<LoginPagecode/>}/>
        */}
      </Routes>
      
      </BrowserRouter>
      
     </div>
   
    );
}
export default App;