import { SocialIcon } from 'react-social-icons';

const CreatorPage = () => {

  const AboutMe = "I’ve been building in the digital space since 2016, turning my passion into a professional career in 2021. While I am a capable Full Stack Developer, my heart lies in the Frontend. I specialize in creating seamless, interactive user interfaces that bridge the gap between complex logic and intuitive design."
  return (
    <div className='flex flex-col justify-evenly items-center h-[calc(100vh+100px)] lg:h-auto mb-1 p-2 bg-slate-900 w-full'>
      <div className='flex flex-col justify-center items-center sm:mt-12'>
        <img src="../../smilePic2.jpg" className='w-1/4 sm:w-1/5 xl:w-1/6 my-2 rounded-full border-4 border-joker-100 lg:mb-4'></img>
        <h1 className='font-quantico font-bold text-3xl sm:text-5xl sm:mt-4 lg:text-6xl xl:text-7xl text-joker-200'>Kerri Gant</h1>
      </div>
      <div className='flex flex-col items-center lg:mt-8'>
        <h3 className='font-quantico font-bold text-2xl sm:text-3xl lg:text-4xl text-joker-200 mb-4'>About</h3>
        <p className=' w-9/10 text-center text-slate-400 text-sm sm:text-lg lg:text-2xl'>{AboutMe}</p>
      </div>
      <div className='flex flex-col items-center lg:mt-8'>
        <h3 className='font-quantico font-bold text-2xl sm:text-3xl lg:text-4xl text-joker-200 mb-4'>Other Projects</h3>
        <div className='flex flex-row justify-evenly items-center w-full'>
          <div className="flex flex-col justify-center items-center mx-4">
            <h4 className="font-quantico text-base mb-2 sm:text-xl lg:text-2xl lg:mb-4 text-slate-400 mb-1">SCRIBBLE</h4>
            <a href="https://dev-kagant.github.io/Scribble/" className='h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px] border-2 border-joker-100 cursor-pointer'>
              <img src="../../Scribble.png" className='h-full w-full'/>
            </a>
          </div>
          {/* <div className="flex flex-col justify-center items-center mx-4">
            <h4 className="font-quantico text-base mb-2 sm:text-xl lg:text-2xl lg:mb-4 text-slate-400 mb-1">SCRIBBLE</h4>
            <a href="https://dev-kagant.github.io/Scribble/" className='h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px] border-2 border-joker-100 cursor-pointer'>
              <img src="../../Scribble.png" className='h-full w-full'/>
            </a>
          </div> */}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full p-4 sm:px-0 xl:pb-8 lg:mt-8 md:w-3/4'>
        <h3 className='font-quantico font-bold text-2xl sm:text-3xl lg:text-4xl text-joker-200 mb-4'>Socials</h3>
        <div className='flex flex-row justify-between sm:justify-evenly w-full'>
          <SocialIcon url="https://github.com/dev-kagant" borderRadius="50%"/>
          <SocialIcon url="https://www.linkedin.com/in/kerrigant/" borderRadius="50%"/>
          <SocialIcon url="https://x.com/kashm0ni" borderRadius="50%"/>
          <SocialIcon url="https://discord.com/users/kagant" borderRadius="50%"/>
          <SocialIcon url="https://www.google.com" network="sharethis" borderRadius="50%"/>
        </div>
      </div>
    </div>
  )
}

export default CreatorPage