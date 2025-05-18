import React from 'react'
import PrrojectsFilter from '../components/PrrojectsFilter'
import LandMarks from '../components/LandMarks'
import Footer from '../components/Footer'
export default function ProjectsPage() {
  return (
    <div className='projects-comp'>
      <PrrojectsFilter/>
      <LandMarks/>
      <Footer show={true}/>
    </div>
  )
}
