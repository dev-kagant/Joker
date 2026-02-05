
const AboutPage = () => {

  const whatIsIt = "Joker is an application that utilizes the JokeAPI by Sven Fehler to generate and display simple giggles for those individuals that want a wholesome laugh.";
  
  const why1 = "Joker is a featured project in Kerri Gant’s professional portfolio, designed to demonstrate the seamless integration of dynamic API architecture and fluid user animations."
  const why2 = "Built with the JokeAPI, this application serves a dual purpose: it acts as a technical playground for mastering asynchronous data fetching and state-driven motion, and a personal mood-lifter. Kerri believes that technology should be as delightful as it is functional; she built Joker not just to display her skills, but to provide a tool that can brighten anyone's day—one laugh at a time."

  const challengeOne = "Integrated the JokeAPI with a pre-fetching strategy to ensure jokes are queued and ready for display, eliminating latency and providing an instantaneous user experience.";
  
  const challengeTwo = "Engineered a complex morph sequence where the bouncing ball transitions into a functional UI card, ensuring a fluid visual flow between animation states.";
  
  const challengeThree = "Mastered the synergy between @keyframes and TailwindCSS to create physics-based animations that respect a utility-first design system.";

  const challengeFour = "The project branding was developed through a hybrid workflow, utilizing AI-generated concepts refined and vectorized within Adobe Illustrator to produce a high-fidelity, scalable SVG logo."

  return (
    <div  className="h-full w-full lg:px-14">
      <h1 className='flex justify-center my-8 text-joker-200 font-quantico font-bold text-5xl sm:text-5xl sm:my-12 md:text-6xl lg:text-8xl lg:my-20'>JOKER</h1>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-quantico font-bold text-xl text-joker-200 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>What Is it?</h2>
        <p className='text-center text-lg text-slate-400 sm:text-2xl lg:text-4xl'>{whatIsIt}</p>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-quantico font-bold text-xl text-joker-200 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Why Create It?</h2>
        <p className='text-center text-lg text-slate-400 sm:text-2xl lg:text-4xl'>
          {why1}
        </p>
        <br></br>
        <p className='text-center text-lg text-slate-400 sm:text-2xl lg:text-4xl'>
          {why2}
        </p>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-quantico font-bold text-xl text-joker-200 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Tech & Resources</h2>
          <div className="flex flex-row justify-between w-7/8 font-quantico text-slate-400 text-lg sm:text-2xl lg:text-4xl">
            <ul className="flex flex-col justify-center items-center">
                <li>Typescript</li>
                <li>React</li>
            </ul>
            <ul className="flex flex-col justify-center items-center">
                <li>JokeAPI</li>
                <li>TailwindCSS</li>
            </ul>
            <ul className="flex flex-col justify-center items-center">
                <li>Axios</li>
                <li>Heroicons</li>
            </ul>
          </div>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-quantico font-bold text-center text-xl text-joker-200 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Key Development Details and Challenges</h2>
        <ul className="w-5/6">
          <li className='list-disc text-left w-full text-lg text-slate-400 mb-4 sm:text-2xl lg:text-4xl lg:mb-10'>{challengeOne}</li>
          <li className='list-disc text-left w-full text-lg text-slate-400 mb-4 sm:text-2xl lg:text-4xl lg:mb-10'>{challengeTwo}</li>
          <li className='list-disc text-left w-full text-lg text-slate-400 mb-4 sm:text-2xl lg:text-4xl lg:mb-10'>{challengeThree}</li>
          <li className='list-disc text-justify text-lg text-slate-400 sm:text-2xl lg:text-4xl'>{challengeFour}</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage;