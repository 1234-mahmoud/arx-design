import React from 'react'
import Slider from '../components/Slider'
import About_us from '../components/About_us'
import Shorts from '../components/Shorts'
import Services from '../components/Services'
import Statistics from '../components/Statistics'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className='home'>
          <Slider/>
      <About_us/>
      <Shorts/>
      <Services/>
      <Statistics/>
      <Projects/>
      <Blog/>
      <Clients/>
      <Footer show={true}/>  
    </div>
  )
}
