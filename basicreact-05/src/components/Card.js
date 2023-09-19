import React from 'react';
import { FaBeer } from 'react-icons/fa';

function Card({course}) {
  return (
    <div>
      <div>
        <img src={course.image.url} alt="" />

        <div>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default Card
