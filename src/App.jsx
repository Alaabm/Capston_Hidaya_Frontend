//useState to keep state of gems
//useEffect to make ajax request(fetch) synchronizes with react correctly 
//useRef to keep a refrence of inputs the user is filling out
import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from "react-router-dom";
import Gems from "./pages/Gems";
import Home from "./pages/Home";
import Dhikr from "./pages/Dhikr";
import Duas from "./pages/Duas";
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import MorningAthkar from './pages/MorningAthkar';
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <div>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gems" element={<Gems/>}/>
          <Route path="/dhikr" element={<Dhikr/>}/>
          <Route path="/duas" element={<Duas/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/morningAthkar" element={<MorningAthkar/>}/>
        </Routes>
      </div>
      <Footer/>
    
    </>
  )
}

export default App
