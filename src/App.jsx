//useState to keep state of gems
//useEffect to make ajax request(fetch) synchronizes with react correctly 
//useRef to keep a refrence of inputs the user is filling out
import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from "react-router-dom";
import Gems from "./pages/Gems";
import Home from "./pages/Home";
import Dhikr from "./pages/Dhikr";

import './App.css'

function App() {


  return (
    <>
      <>
      <div>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="/gems" element={<Gems/>}/>
          <Route path="/dhikr" element={<Dhikr/>}/>
        </Routes>
      </div>
    </>
    </>
  )
}

export default App
