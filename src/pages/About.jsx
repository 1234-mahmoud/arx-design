import React from 'react'
import '../style/About.css'
import Summary from '../components/Summary'
import Vision from '../components/Vision'
import Partners from '../components/Partners'
import PartnerStats from '../components/PartnerStats'
import Directors from '../components/Directors'
import Footer from '../components/Footer'
export default function About() {
  return (
    <div className='about-comp'>
    <Summary/>
    <Vision/>
    <Partners/>
    <PartnerStats/>
    <Directors/>
    <Footer show={true}/>
    </div>
  )
}
