import { useState } from 'react'
import JokeComponent from '../components/JokeComponent'

function LandingPage() {
  return (
    <div className='h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] lg:h-[calc(100vh-144px)] w-full '> 
        <JokeComponent />
    </div>
  )
}

export default LandingPage