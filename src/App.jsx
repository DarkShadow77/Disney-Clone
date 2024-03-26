import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Carousel from './components/carousel'
import FirstGrid from './components/first_grid'
import Title from './components/title'
import SecondGrid from './components/second_grid'
import ThirdGrid from './components/third_grid'
import FourthGrid from './components/fourth_grid'


function App() {
  
  return (
    <>
      <NavBar />
      <div id='body'>
        <Carousel />
        <FirstGrid/>
        <Title title={"news"}/>
        <SecondGrid/>
        <ThirdGrid/>
        <Title title={"Goods featuring popular characters are available!"}/>
        <FourthGrid/>
      </div>
    </>
  )
}

export default App
