"use client";

import { useEffect } from "react";
import Image from "next/image";



import artBoardImg from "/public/img/art-board.png";
import customLoop from "/public/img/custom-loop.png";


const CustomLoop = () => {

  return (
    <article className="relative w-full bg-[rgba(232,231,229,1)] gsap-custom-loop-timeline">
      <Image
        src={artBoardImg}
        alt="art-board"
        className="object-cover w-[130vw] h-full absolute top-0 left-0 right-0 custom-bg-img"
      />
      <div className="relative z-[1]">
        <div id="custom-loop"></div>
        <div className="py-[10rem] pb-[15rem] max-w-[500px] md:max-w-full mx-auto flex flex-col lg:flex-row justify-center items-center custom-loop-content">
          <div className="flex-1 max-w-[600px] flex items-center justify-center custom-div-img">
            <Image src={customLoop} alt="image" className="object-cover" />
          </div>
          <div className="flex-1 max-w-[400px] lg:max-w-[500px] custom-card-content">
            <div className="bg-[hsla(0,0%,100%,0.25)] rounded-xl border py-5 px-3 sm:px-6">

              <p className="text-base sm:text-lg lg:text-xl">
                Sample Text : When it comes to achieving excellence, meticulous
                attention to detail is paramount. For PC builders and users
                alike, delving into the finer aspects ensures that their systems
                operate at peak performance, guaranteeing the desired levels of
                reliability and security. Whether embarking on a custom PC build
                or utilizing a pre-built system, the secret to optimal outcomes
                lies in the devotion to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CustomLoop;
