// src/components/Jumbotron.jsx
import './Jumbotron.scss';

function Jumbotron() {
  return (
    <section className="jumbotron-section relative bg-gray-300 bg-blend-multiply bg-cover bg-center bg-no-repeat bg-[url('https://4kwallpapers.com/images/wallpapers/gargantua-black-4480x2520-9621.jpg')] h-[350px]">
      
      {/* Overlay gradient */}
      <div className="gradient-overlay absolute inset-x-0 bottom-0 top-[60%] bg-gradient-to-t from-slate-950"></div>
      
      <div className="px-4 mx-auto max-w-screen-xl text-center flex flex-col justify-center items-center relative h-full">
        
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl own-shadow">
          DAC Notes
        </h1>
        
        <p className="mb-6 text-base font-normal text-white sm:px-16 lg:px-48 small-shadow">
          A collection of lecture notes, cheat sheets, and study materials accessible anywhere.
        </p>

        {/* Updated Line: Everything is flex-aligned now */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-base font-normal text-white sm:px-16 lg:px-48 own-shadow">
          <span className='small-shadow'>Vibe Coded by</span>
          
          <a 
            href="https://www.youtube.com/@KaysAcoustics" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
            <img 
              src="https://yt3.googleusercontent.com/ytc/AIdro_mUaZiRmvJVNYVFJNvsjVfNWFpbP51-lkdoVtSTSnRO1rs=s160-c-k-c0x00ffffff-no-rj" 
              alt="Channel Logo" 
              className="w-8 h-8 rounded-full border border-white"
            />
            <span className="font-semibold small-shadow">Kay's Acoustics</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default Jumbotron;