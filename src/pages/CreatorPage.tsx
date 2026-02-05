import { SocialIcon } from 'react-social-icons';

const CreatorPage = () => {

  const AboutMe = "I’ve been building in the digital space since 2016, turning my passion into a professional career in 2021. While I am a capable Full Stack Developer, my heart lies in the Frontend. I specialize in creating seamless, interactive user interfaces that bridge the gap between complex logic and intuitive design."
  return (
    <div className='flex flex-col mb-1 h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] lg:h-[calc(100vh-144px)] w-full'>
      <div className='flex flex-col justify-center items-center max-h-[25%] min-h-[25%] '>
        <img src="../../smilePic2.jpg" className='w-1/6 venti:w-1/2 my-2 rounded-full mobile-image'></img>
        <h1 className='font-quantico font-bold text-3xl text-joker-200'>Kerri Gant</h1>
      </div>
      <div className='flex flex-col items-center mb-1 max-h-[25%] min-h-[25%] md:w-3/4'>
        <h3 className='font-quantico font-bold text-2xl text-joker-200 mb-4'>About</h3>
        <p className=' w-9/10 text-center text-slate-400 mobile-font'>{AboutMe}</p>
      </div>
      <div className='flex flex-col items-center mb-1 max-h-[28%] min-h-[28%] md:w-3/4'>
        <h3 className='font-quantico font-bold text-2xl text-joker-200 mb-4'>Other Projects</h3>
        <div className='flex flex-row justify-evenly items-center w-full'>
          <div className="flex flex-col justify-center items-center mx-4">
            <h4 className="font-quantico text-base text-slate-400 mb-1">SCRIBBLE</h4>
            <a href="https://dev-kagant.github.io/Scribble/">
              <img src="../../Scribble.png" className='h-[100px] w-[100px] border-2 border-joker-100 mobile-projects'/>
            </a>
          </div>
          {/* <div className="flex flex-col justify-center items-center mx-4">
            <h4 className="font-quantico text-base text-slate-400 mb-1">SCRIBBLE</h4>
            <a href="https://dev-kagant.github.io/Scribble/">
              <img src="../../Scribble.png" className='h-[100px] w-[100px] border-2 border-joker-100 mobile-projects'  onClick={() => {navigate('https://dev-kagant.github.io/Scribble/')}}/>
            </a>
          </div> */}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full max-h-[20%] min-h-[20%] px-4 md:w-3/4'>
        <h3 className='font-quantico font-bold text-2xl text-joker-200 mb-4'>Socials</h3>
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