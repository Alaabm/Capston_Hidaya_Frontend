//useState to keep state of gems
//useEffect to make ajax request(fetch) synchronizes with react correctly 
//useRef to keep a refrence of inputs the user is filling out
import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import About from './pages/About';
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
          <Route path="/about" element={<About/>}/>
          <Route path="/dua/anxietyDua" element={<AnxietyDua/>}/>
          <Route path="/dhikr/alhamdulilahCounter" element={<AlhamdulilahCounter/>}/>
          <Route path="/dhikr/allahuakbarCounter" element={<AllahuakbarCounter/>}/>
          <Route path="/dua/calamityDua" element={<CalamityDua/>}/>
          <Route path="/dua/characterDua" element={<CharacterDua/>}/>
          <Route path="/emails" element={<Contact/>}/>
          <Route path="/dhikr" element={<Dhikr/>}/>
          <Route path="/duas" element={<Duas/>}/>
          <Route path="/dua/eveningAthkar" element={<EveningAthkar/>}/>
          <Route path="/gems" element={<Gems/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/dua/istikharaDua" element={<IstikharaDua/>}/>
          <Route path="/dua/morningAthkar" element={<MorningAthkar/>}/>
          <Route path="/dua/sleepDua" element={<SleepDua/>}/>
          <Route path="/dhikr/subhanallahCounter" element={<SubhanallahCounter/>}/>
          <Route path="/dua/successDua" element={<SuccessDua/>}/>
          <Route path="/dua/wakeDua" element={<WakeDua/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
