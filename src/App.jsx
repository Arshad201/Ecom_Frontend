import React from 'react'
import Header from './Components/Header/Header';
import FixedMenuBtn from './Components/FixedMenuBtn/FixedMenuBtn.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Header/>
      <FixedMenuBtn/>
      <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<Home/>} />
      </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
