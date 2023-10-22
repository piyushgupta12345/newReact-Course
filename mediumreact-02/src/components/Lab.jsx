import React from 'react'
import { useNavigate } from 'react-router-dom'


function Lab() {

  const Navigate = useNavigate()

  function clickHandler() {
    Navigate(-1)
  }
  return (
    <>
      <div>
        This is a Lab Page
      </div>
      <button onClick={clickHandler}>Back to</button>
    </>
  )
}

export default Lab
