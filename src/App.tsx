import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./views/home/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
          <Route path={"/"} element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
