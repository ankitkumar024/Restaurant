import React from 'react'
import './app.css'
import { Navbar, Hero, Special, Banner, Specialities, Events, Story, Footer } from './components/index'

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <Special/>
      <Banner/>
      <Specialities/>
      <Events/>
      <Story/>
      <Footer/>
    </>
  )
}

export default App
