import { useEffect, useState } from 'react'
import axios from "axios";


function JokeComponent() {
    const [mount, setMount] = useState(true);
    const [ballIn, setBallIn] = useState('ball-drop-in');
    const [ballOut, setBallOut] = useState('');
    const [setup, setSetup] = useState('');
    const [delivery, setDelivery] = useState('')
    const [joke, setJoke] = useState('');
    const [punchline, setPunchline] = useState('');
    const [jokeStyles, setJokeStyles] = useState('joke-grow');
    const [punchlineStyles, setPunchlineStyles] = useState('');
    const [question, setQuestion] = useState(true);

    useEffect(()=>{
        if(mount){
            setMount(false);
            fetchFirstJoke();
            fetchJoke();
        }
    },[])

    const fetchFirstJoke = async() => {
        await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode')
            .then((response)=>{
                setJoke(response.data.setup);
                setPunchline(response.data.delivery);
            })
            .catch((error)=>{
                console.log("Error: ", error);
            })
    }

    const fetchJoke = async() => {
        await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode')
            .then((response)=>{
                setSetup(response.data.setup);
                setDelivery(response.data.delivery);
            })
            .catch((error)=>{
                console.log("Error: ", error);
            })
    }

    const handleNextJoke = () => {
        setBallOut("ball-drop-out");
        setBallIn("ball-drop-in");
        setJokeStyles("joke-grow");
        setPunchlineStyles("joke-shrink");
        setQuestion(true);
        setTimeout(()=>{
            setJoke(setup);
            setPunchline(delivery);
            fetchJoke();
        }, 2000)
    }

    const handlePunchline = () => {
        setBallIn("ball-bounce");
        setBallOut("");
        setJokeStyles("joke-shrink");
        setPunchlineStyles("joke-bounce");
        setQuestion(false);
    }

  return (
    <div className='h-full w-full relative'>
        <div className={`z-2 h-4 w-full rounded-full bg-joker-200 text-joker-100 transform-[translate(-50%, -50%)] absolute ${ballIn}`}></div>
        <div className={`z-2 rounded-full bg-joker-200 text-joker-100 transform-[translate(-50%, -50%)] absolute ${ballOut}`}></div>
        <div className={`z-3 absolute text-center text-joker-100 top-[30%] left-[50%] font-quantico font-bold transform-[translate(-50%, -50%)] ${jokeStyles}`}>{joke}</div>
        <div className={`z-3 text-[0px] absolute text-center text-joker-100 top-[30%] left-[50%] font-quantico font-bold transform-[translate(-50%, -50%)] ${punchlineStyles}`}>{punchline}</div>
        <div className='flex flex-row justify-evenly items-center absolute top-[60%] w-full'>
            {question ? (
                <button className='h-[50px] sm:h-[60px] lg:h-[70px] w-[110px] sm:w-[140px] lg:w-[170px] font-quantico text-lg sm:text-2xl lg:text-3xl p-2 bg-joker-100 rounded-lg border-1 lg:border-2 border-joker-200 cursor-pointer' onClick={handlePunchline}>Punchline</button>
            ) : (
                <button className='h-[50px] sm:h-[60px] lg:h-[70px] w-[110px] sm:w-[140px] lg:w-[170px] font-quantico text-lg sm:text-2xl lg:text-3xl p-2 bg-joker-100 rounded-lg border-1 lg:border-2 border-joker-200 cursor-pointer' onClick={handleNextJoke}>Next Joke</button>
            )}
        </div>
    </div>
  )
}

export default JokeComponent