import React from 'react'
import '../style/About.css'
import Summary from '../components/Summary'
import Vision from '../components/Vision'
import Partners from '../components/Partners'

export default function About() {
  return (
    <div className='about-comp'>
    <Summary/>
    <Vision/>
    <Partners/>
    </div>
  )
}
