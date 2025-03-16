import React from 'react'
import "./Contact.css"

function Form() {
  return (

    <div className='container'>
       <div className='form'>
        <div className='centered-title'>
            <h1>Contact Us</h1>
        </div>
        <form>
            <label>Your Name</label>
            <input type='text'></input>

            <label>Email</label>
            <input type='email'></input>

            <label>Organization</label>
            <input type='text'></input>

            <label>Inquiry</label>
            <textarea rows="6" placeholder='Type your Message here'/>

            <button className='btn'>Submit</button>
        </form>
        </div>
    </div>
   
  )
}

export default Form