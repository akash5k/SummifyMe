import React from 'react';
import { banner, logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col"> {/* Set height to 100vh */}
      <nav className="flex justify-between items-center w-full pt-2">
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
  <div class="">
    <h1 class="head_text">
      Summarize Articles with <br class="max-md:hidden" />
      <span class="text_gradient">OpenAI GPT-4</span>
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
