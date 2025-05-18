import React from 'react'
import '../style/OneProject.css'
import SliderProjects from './SliderProjects'
import ProjInfo from './ProjInfo'
import BuildingInfo from './BuildingInfo'
export default function OneProject() {
  return (
    <div className='one-proj'>
        <SliderProjects/>
        <ProjInfo/>
        <BuildingInfo/>
    </div>
  )
}
