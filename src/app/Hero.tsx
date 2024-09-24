
import Image from "next/image";

import Link from "next/link";
import serverImg from "/public/img/server-img.png";

const Hero = () => {
  return (
    <article className="relative bg-mode-black">
      {/* circle gradient */}
      <div className="hidden lg:block absolute -top-[40px] -left-[356px] z-1 w-[516px] h-[516px] bg-circle-gradient-2 blur-[5rem] opacity-20 rounded-full"></div>
      <div className=" absolute top-[20%] -right-[100px] z-1 w-[350px] h-[350px] bg-circle-gradient-2 blur-[5rem] opacity-30 rounded-full"></div>
      <div className="hidden lg:block absolute top-[70%] left-1/2 transform -translate-x-1/2 z-3 w-[350px] h-[350px] bg-circle-gradient-3 blur-[5rem] opacity-0.3 rounded-full"></div>

      {/* circle gradient animation for small screen */}
      {/* <AnimationCircle /> */}
      <div className="text-white pt-[3.5rem] pb-[2.5rem] lg:pt-[5rem] xl:pb-[7rem] relative">
        <div className="flex flex-col justify-between gap-10">
          <p className="font-bebas  max-w-fit z-3 text-[2.5rem] leading-none sm: lg:text-[6.25rem] lg:leading-[100px]">
            <span className="">WE BUILD </span>
            <span className="font-dawning text-primary">People</span> <br />
            <span className="relative hero-content-before">
              BEFORE
            </span>{" "}
            <br />
            <span className="relative">
              WE BUILD PC
            </span>
          </p>
          <p className="hidden md:block w-1/2 z-3">
            Crafting Your Ultimate Gaming Experience - Unleash Your Power! Smart
            people work with Smart Systems. Customise your Gaming PC
          </p>
          <div className="z-3 max-w-44  lg:max-w-56">
            <Link
              href={"#get-quote"}
              className="w-full custom-cursor text-white font-semibold text-sm sm:text-base bg-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-0.7 hover:shadow-[0px_0px_30px_8px_rgba(255,119,51,0.6)]"
            >
              BUILD NOW
            </Link>
          </div>
        </div>
        <Image
          src={serverImg}
          alt="hero-bg"
          className="object-cover absolute h-[250px] -top-5 left-0 sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] lg:top-0"
          priority
        />
      </div>
    </article>
  );
};

export default Hero;
