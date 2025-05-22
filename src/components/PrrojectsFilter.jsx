import { BiFilterAlt } from "react-icons/bi"; 
import { BiSearch } from "react-icons/bi"; 
import React from 'react'
import '../style/ProjectsFilter.css'
import bg from '../assets/slide_2.jpg'
export default function PrrojectsFilter() {
  return (
    <div className='proj-filter'>
        <img loading="lazy" src={bg} alt="" />
        <div className="search-box-filter">
            <h1>Projects</h1>
            <div className="search-filter">
                <input type="search" name="" id="" placeholder="Search About Projects"/>
                <div className="serch-filter-btns">
                    <BiSearch /><BiFilterAlt />
                </div>
            </div>
        </div>
    </div>
  )
}
