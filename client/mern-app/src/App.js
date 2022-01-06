import React from 'react'
import Home from './componunts/Home'
import About from './componunts/About'
import Contact from './componunts/Contact'
import Login from './componunts/Login'
import Signup from './componunts/Signup'
import Navbar from './componunts/Navbar'
import { Route, Routes} from 'react-router-dom'
import ErrorPage from './componunts/ErrorPage'

export default function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        {/* <Route element={<ErrorPage/>}/> */}
        <Route path ="*" element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}
