import React from 'react';
import './Item.css'

function Item(props) {
  return (
    <>
      <p className='para'>{props.name}</p>
      {props.children}
    </>
  )
}

export default Item