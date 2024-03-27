import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Carousel from './components/carousel'
import FirstGrid from './components/first_grid'
import Title from './components/title'
import SecondGrid from './components/second_grid'
import ThirdGrid from './components/third_grid'
import FourthGrid from './components/fourth_grid'
import FifthGrid from './components/fifth_grid'
import SixthGrid from './components/sixth_grid'
import SeventhGrid from './components/seventh_grid'
import EigthGrid from './components/eigth_grid'
import NinthGrid from './components/ninth_grid'
import TenthGrid from './components/tenth_grid'

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
        <Title title={"Character introduction"} style={{backgroundColor: "white"}}/>
        <FifthGrid style={{backgroundColor: "white"}}/>
        <SixthGrid style={{backgroundColor: "white"}}/>
        <Title title={"Special"} style={{backgroundColor: "white"}}/>
        <SeventhGrid style={{backgroundColor: "white"}}/>
        <Title title={"character products"} style={{backgroundColor: "white"}}/>
        <EigthGrid style={{backgroundColor: "white"}}/>
        <NinthGrid style={{backgroundColor: "white"}}/>
        <Title title={"disney account"} style={{backgroundColor: "white", paddingTop:"0px"}} para={{fontSize: "1.1em", fontWeight: "400"}}/>
        <TenthGrid style={{backgroundColor: "white"}}/>
        <Title title={"© Disney"} style={{backgroundColor: "white", paddingTop:"0px", paddingBottom:"50px"}} para={{fontSize: ".85em", fontWeight: "400"}}/>
      </div>
    </>
  )
}

export default App
