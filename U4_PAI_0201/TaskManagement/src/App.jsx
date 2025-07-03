import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Tasks from './components/Tasks'
import About from './components/About'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import { TaskContextProvider } from './components/TaskContextProvider'
import View from './components/View'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/addtasks' element={<TaskContextProvider/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
     
    </>
  )
}

export default App
