import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Carousel from './components/carousel'

function App() {
  
  return (
    <>
      <NavBar />
      <div id='body'>
        <Carousel />
      </div>
    </>
  )
}

export default App
