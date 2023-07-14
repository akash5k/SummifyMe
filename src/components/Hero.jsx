import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img src={logo} alt="Summify logo" className='w-40 object-ccontain'/>

      <button
        type='button'
        onClick={()=>window.open('https://github.com/akash5k')}
        className='black_btn'>
        Github
      </button>
    </nav>

    <h1 className='head_text'>
      Sumerize Articles and Websites with <br className='max-md:hidden'/>
      <span className='blue_gradient'>OpenAI GPT-4</span>
    </h1>
    <h2 className='desc'>
    Simplify your reading with the help of AI using SummifyMe, 
    article summarizer that utilizes artificial intelligence to
    transform lengthy articles into clear and concise summaries.
    </h2>
    </header>
  )
}

export default Hero