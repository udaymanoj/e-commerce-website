import React, { useEffect, useState } from 'react'
import './Newcollection.css'
import Items from '../Items/Items'

const Newcollections = () => {

  const [new_collections,setNew_collection]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/newcollection')
    .then((res)=>res.json())
    .then((data)=>{setNew_collection(data)})
    
  },[])
  return (
    <div className='newcollection-container'>
        <h1>NEW COLLECTION</h1>
        <hr className='newcollection-hr'/>
        <ul>
            {new_collections.map(each=>(<Items key={each.id} details={each}/>))}
        </ul>
    </div>
  )
}

export default Newcollections
