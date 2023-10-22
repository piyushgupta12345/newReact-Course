import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const Navigate = useNavigate()

  function clickHandler(){
    Navigate('/lab')
  }

  return (
    <>
    <div>
      This is a About Page
    </div>
    <button onClick={clickHandler}>Click</button>
    </>
    
  )
}

export default About
