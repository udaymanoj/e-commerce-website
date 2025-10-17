import React from 'react'
import Heros from '../Heros/Heros'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import Newcollections from '../Newcollections/Newcollections'
import Newsletter from '../Newsletter/Newsletter'


const Home = () => {
  return (
    <div>
      <Heros/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    </div>
  )
}

export default Home
