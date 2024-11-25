import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Menu from './Pages/Menu'
import Gallery from './Pages/Gallery'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import ViewCard from './Pages/ViewCard'
import Chekout from './Pages/Chekout'
import Login from './Pages/Login'
import Card1 from './AddCard/Card1'
import Card2 from './AddCard/Card2'

function App() {
  return (
    <div className='relative font-montserrat'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path="/ViewCard" element={<ViewCard/>} />
        <Route path='/Chekout' element={<Chekout/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Card1' element={<Card1/>} />
        <Route path='/Card2' element={<Card2/>} />
      </Routes>
    </div>
  )
}

export default App
