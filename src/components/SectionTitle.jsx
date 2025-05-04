import React from 'react'
import '../style/section_title.css'
export default function SectionTitle({className,main_title,secondary_title}) {
  return (
    <div className={`section_title ${className}`}>
        <h4>{main_title}</h4>
        <h2>{secondary_title}</h2>
    </div>
  )
}
