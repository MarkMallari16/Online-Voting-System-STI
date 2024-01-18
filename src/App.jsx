import { Container } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'
import NavBar from './component/NavBar'
import LandingPage from './component/LandingPage'
import Footer from './component/Footer'

function App() {

  return (
    <>

      <NavBar />
      <LandingPage />
      <Footer/>
    </>
  )
}

export default App
