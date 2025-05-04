import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'
import About_us from './components/About_us'
import Shorts from './components/Shorts'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Projects from './components/Projects'
import Blog from './components/Blog'

function App() {


  return (
    <div className='App'>
      {/* <Slider/> */}
      <About_us/>
      <Shorts/>
      <Services/>
      <Statistics/>
      <Projects/>
      <Blog/>
    </div>
  )
}

export default App
