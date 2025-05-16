import React from 'react'
import VidBlog from '../components/VidBlog'
import Footer from '../components/Footer'
import News from '../components/News'
export default function BlogPage() {
  return (
    <div className='Blog-comp'>
        <VidBlog/>
        <News/>
        <Footer show={true}/>
    </div>
  )
}
