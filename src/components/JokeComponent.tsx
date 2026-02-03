import React, { useState } from 'react'

function JokeComponent() {
    const [bounce, setBounce] = useState('ball-drop-in');
    const [ballSize, setBallSize] = useState('');
    const [fontSize, setFontSize] = useState('');

    const handleBounce = () => {
        if(bounce === 'start-bounce'){
            setBounce('end-bounce');
            setBallSize('');
        }
        if(bounce === 'end-bounce'){
            setBounce('start-bounce');
        }
    }

    const handleSize = () => {
        if(fontSize === ''||'end-grow'){
            setFontSize('start-grow');
            setBallSize('start-ball-shrink')
        }
        if(fontSize === 'start-grow'){
            setFontSize('end-grow');
            setBallSize('end-ball-shrink')
        }
    }

  return (
    <div className='h-full w-full'>
        <div className={`text-center z-100 h-4 w-full rounded-full bg-joker-200 text-joker-100 transform-[translate(-50%, -50%)] relative ${bounce}`}>Jokes to be shared, and more jokes to come, just hit next.</div>
        <div className={`joke ${fontSize}`}>There is a joke here</div>
        <div className='buttons'>
            <button className='button-style' onClick={handleSize}>Answer</button>
            <button className='button-style' onClick={handleBounce}>Next</button>
        </div>
    </div>
  )
}

export default JokeComponent