import React from 'react'
import "./filter.css"

export default function Filter() {
  return (
    <>
        <div className='filter'>
            <span className='filter'> FilterBy: </span>
            <span className='opt'> Unread </span>
            <span className='opt'> Read </span>
            <span className='opt'> Favorites </span>
        </div>
    </>
  )
}
