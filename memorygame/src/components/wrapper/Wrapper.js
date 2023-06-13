import React from 'react'

import CardsList from "../Cards/CardsList"
import "./Wrapper.css"

function Wrapper() {
  return (
    <div className='wrapper'>
        <div className='gameContainer'> 
          <CardsList/>
        </div>
    </div>
  )
}

export default Wrapper