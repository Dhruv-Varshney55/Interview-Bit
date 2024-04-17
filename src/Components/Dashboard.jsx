import React from 'react'
import Navbar from './Navbar'
import GetStarted from './GetStarted'
import Tshirts from './Tshirts'
import Mug from './Mug'
import Parallax from './Parallax'
import Loved from './Loved'
import Line from './Line'
import Clients from './Clients'
import Footer from './Footer'

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <GetStarted/>
      <Tshirts/>
      <Mug/>
      <Parallax/>
      <Loved/>
      <Line/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default Dashboard
