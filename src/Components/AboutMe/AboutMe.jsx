import React, { useEffect, useRef } from 'react';
import '../AboutMe/AboutMe.css';

const AboutMe = () => {
  return (
    <div id="aboutMe" className="flex banner justify-center items-center flex-col mb-12">
      <div className="container backdrop-blur-md flex flex-col justify-center items-center w-[40%] h-[60%] rounded-2xl p-12">
        <h1 className="font-bold  z-10 mb-8 text-7xl text-slate-50 p-2">
          I'm Trevor McGill.
        </h1>
        <p className='font-normal text-lg text-slate-50 sm:prose-base lg:prose-lg'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, eveniet! Amet, saepe? Explicabo adipisci sequi vero perspiciatis. Maiores iste amet, cumque quibusdam natus, quia hic maxime ipsa, modi vero voluptate!
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem itaque ad quo rerum nam cum eos veniam dolorum consequatur vero omnis reiciendis sequi, vitae distinctio odit unde doloremque ducimus.
        </p>
        </div>
        {/*         <div className="blur w-[80%] h-[80%] rounded-xl flex items-center justify-center p-4">
          <div className="icons grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:gap-16 text-soft-300"></div>
        </div> */}
    </div>
  );
};

export default AboutMe;
