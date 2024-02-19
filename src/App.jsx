//useState to keep state of gems
//useEffect to make ajax request(fetch) synchronizes with react correctly 
//useRef to keep a refrence of inputs the user is filling out
import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import AnxietyDua from './pages/AnxietyDua';
import AlhamdulilahCounter from './pages/AlhamdulilahCounter';
import AllahuakbarCounter from './pages/AllahuakbarCounter';
import CalamityDua from './pages/CalamityDua';
import CharacterDua from './pages/CharacterDua';
import Contact from './pages/Contact';
import Dhikr from "./pages/Dhikr";
import Duas from "./pages/Duas";
import EveningAthkar from './pages/EveningAthkar';
import Footer from './components/Footer';
import Gems from "./pages/Gems";
import Home from "./pages/Home";
import IstikharaDua from './pages/IstikharaDua';
import MorningAthkar from './pages/MorningAthkar';
import NavBar from './components/NavBar';
import SleepDua from './pages/SleepDua';
import SubhanallahCounter from './pages/SubhanallahCounter';
import SuccessDua from './pages/SuccessDua';
import WakeDua from './pages/WakeDua';


function App() {

  return (
    <>
      <NavBar/>
      <div>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="/anxietyDua" element={<AnxietyDua/>}/>
          <Route path="/alhamdulilahCounter" element={<AlhamdulilahCounter/>}/>
          <Route path="/allahuakbarCounter" element={<AllahuakbarCounter/>}/>
          <Route path="/calamityDua" element={<CalamityDua/>}/>
          <Route path="/characterDua" element={<CharacterDua/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dhikr" element={<Dhikr/>}/>
          <Route path="/duas" element={<Duas/>}/>
          <Route path="/eveningAthkar" element={<EveningAthkar/>}/>
          <Route path="/gems" element={<Gems/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/istikharaDua" element={<IstikharaDua/>}/>
          <Route path="/morningAthkar" element={<MorningAthkar/>}/>
          <Route path="/sleepDua" element={<SleepDua/>}/>
          <Route path="/subhanallahCounter" element={<SubhanallahCounter/>}/>
          <Route path="/successDua" element={<SuccessDua/>}/>
          <Route path="/wakeDua" element={<WakeDua/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
