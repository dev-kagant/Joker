import React, { useState } from 'react'

function JokeComponent() {
    const [ballIn, setBallIn] = useState('ball-drop-in');
    const [ballOut, setBallOut] = useState('');
    const [joke, setJoke] = useState('joke-grow');
    const [punchline, setPunchline] = useState('');

    const fetchJoke = () => {

    }

    const handleNextJoke = () => {
        setBallOut("ball-drop-out");
        setBallIn("ball-drop-in");
        setJoke("joke-grow");
        setPunchline("joke-shrink");
    }

    const handlePunchline = () => {
        setBallIn("ball-bounce");
        setBallOut("");
        setJoke("joke-shrink");
        setPunchline("joke-grow");
    }

  return (
    <div className='h-full w-full relative'>
        <div className={`z-2 h-4 w-full rounded-full bg-joker-200 text-joker-100 transform-[translate(-50%, -50%)] absolute ${ballIn}`}></div>
        <div className={`z-2 rounded-full bg-joker-200 text-joker-100 transform-[translate(-50%, -50%)] absolute ${ballOut}`}></div>
        <div className={`z-3 absolute text-center text-joker-100 top-[30%] left-[50%] font-quantico font-bold transform-[translate(-50%, -50%)] ${joke}`}>Jokes to be shared, and more jokes to come, just hit next.</div>
        <div className={`z-3 text-[0px] absolute text-center text-joker-100 top-[30%] left-[50%] font-quantico font-bold transform-[translate(-50%, -50%)] ${punchline}`}>Answers to the jokes to be shared, and more punch lines to come, just hit next.</div>
        <div className='flex flex-row justify-evenly items-center absolute top-[60%] w-full'>
            <button className='h-[50px] w-auto p-2 bg-joker-100 rounded-lg border-1 border-joker-200' onClick={handlePunchline}>Punchline</button>
            <button className='h-[50px] w-auto p-2 bg-joker-100 rounded-lg border-1 border-joker-200' onClick={handleNextJoke}>Next Joke</button>
        </div>
    </div>
  )
}

export default JokeComponent