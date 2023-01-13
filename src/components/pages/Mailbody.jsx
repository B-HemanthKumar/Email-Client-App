import React from 'react'
import Filter from '../filter/Filter'
import Indimail from '../indimail/Indimail'
import Indimailbody from '../indimailbody/Indimailbody'

import "./mailbody.css"

export default function Mailbody() {
  return (
    <>
    <Filter />
    <div className='mailbody'>
    <div className='mailbody1'>
            <Indimail />
    <Indimail /> 
    <Indimail /> 
    <Indimail /> 
    <Indimail />
    </div>
    <div className='mailbody2'> 
    <Indimailbody /> 
    </div>
    </div>
    
    </>
  )
}
