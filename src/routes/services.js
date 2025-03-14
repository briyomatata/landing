import React from 'react'
import './Services.css'

function services(props) {
  return (
    <div className='project-card'>
        <h3 className='project-title'>
            {props.title}
        </h3>

        <div className='card-details'>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default services