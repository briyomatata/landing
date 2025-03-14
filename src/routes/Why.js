import React from 'react'
import "./Why.css"

function Why() {
  return (
    <div className="why-choose-us-container">
    <h1 className="page-title">Why Choose Us?</h1>

    <div className="reasons-container">
      <div className="reason-card">
        <h2 className="reason-title"> Experienced M & E officers</h2>
       
      </div>

      <div className="reason-card">
        <h2 className="reason-title"> Cost-Effective & Scalable Solutions</h2>
      </div>

      <div className="reason-card">
        <h2 className="reason-title">Use of Cutting-Edge Tools and Frameworks</h2>
      </div>
    </div>

    <div className="cta-container">
      <button className="cta-button contact-button">Contact Us</button>
      <button className="cta-button signup-button">Sign Up Now</button>
    </div>
  </div>
  )
}

export default Why