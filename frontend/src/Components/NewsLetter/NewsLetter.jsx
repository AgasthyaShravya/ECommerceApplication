import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Don’t Miss a Beat in Fashion!</h1>
        <p>Sign up for our newsletter and receive the latest trends directly via email.</p>
        <div>
            <input type="email" placeholder='    Your Email'/>
            <button>Join Our Family</button>
        </div>
    </div>
  )
}

export default NewsLetter