import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import "./App.css";
import NavBar from './NavBar';


const App = () => {
  return (
    <>
    <NavBar />
      <BrowserRouter >
      <Routes >
      <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}
export default App