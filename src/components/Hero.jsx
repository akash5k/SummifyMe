import React from 'react';
import { banner, logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="nav">
        <img src={logo} alt="Summify logo" className="w-40 object-contain" />

        <button
          type="button"
          onClick={() => window.open('https://github.com/akash5k')}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2">
  <div class="hidden md:block floating">
    <img src={banner} alt="ai banner" class="w-200 drop-shadow-2xl" />
  </div>
  <div>
    <h1 class="head_text">
    Streamline Your Reading Experience with  <br class="max-md:hidden" />
      <span class="text_gradient ">AI-Powered</span> <br class="max-md:hidden" /> Article Summarizer
    </h1>
    <h2 class="desc">
      Simplify your reading with the help of AI using SummifyMe,
      article summarizer that utilizes artificial intelligence to
      transform lengthy articles into clear and concise summaries.
    </h2>
  </div>
</div>

    </header>
  );
};

export default Hero;
