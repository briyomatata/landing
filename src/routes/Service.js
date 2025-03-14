import React from 'react'
import './Services.css'
import Data from "./services";
import Datacard from "./Data";

function Service() {
  return (
    <div className="work-container">
    <h1 className="project-heading">Our Services</h1>
    <div className="project-container">
      {Datacard.map((Val, ind) =>{
        return(
          <Data
          key={ind}
          title={Val.title}
          text={Val.text}
         />
        )
      })}

    </div>
  </div>
    
  )
}

export default Service