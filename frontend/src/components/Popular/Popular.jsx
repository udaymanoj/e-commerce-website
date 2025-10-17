import React, { useEffect, useState } from 'react'
import './Popular.css'

import Items from '../Items/Items.jsx'


const Popular = () => {
  const [popular,setpopular]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/popularinwomen')
    .then((res)=>res.json())
    .then((data)=>{setpopular(data)})
  },[])

  return (
   <div className='popular-container'>
    <h1>POPULAR IN WOMEN</h1>
    <hr/>
      <ul>
        {popular.map(each=>(<Items key={each.id} details={each}/>))}
      </ul>
   </div>
  )
}

export default Popular
