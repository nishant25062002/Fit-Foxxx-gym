import React from 'react'
import './Album.css'
import { data } from '../../data'

const Album = () => {
  return (
    <div className="gallery">
      {
        data.map((elem, k) =>
        (
          <img className="img-style" src={elem.img} loading="lazy" />
        )
        )
      }

    </div>
  )
}

export default Album