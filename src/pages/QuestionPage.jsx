import React from 'react'
import Questions from '../components/Questions'
import Footer from './../components/Footer';
export default function QuestionPage() {
  return (
    <div className='questPage'>
        <Questions/>
        <Footer show={true}/>
    </div>
  )
}
