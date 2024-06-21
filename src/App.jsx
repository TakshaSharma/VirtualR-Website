import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import  Workflow  from './Components/Workflow'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero/>
        </div>
        <Feature/>
       <Workflow/>
    </div>
  )
}

export default App
