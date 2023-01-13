import React from 'react'
import "./indimail.css"

export default function Indimail() {
  return (
    <>
    <div className='mail'>
            <span className='from'> From: </span>
            <span className='subject'> Subject: </span>
            <span className='des'> Description: </span> 
            <span className='dt'> Date&Time: </span>
        </div>
    </>
  )
}
