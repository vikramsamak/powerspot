import React from "react";
import Charge from "../assets/img/charge.png";
import Image from "next/image";
function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-16 h-full">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            P O W E R S P O T
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Discover your perfect EV charging partner. Easily find nearby
            charging stations with our user-friendly web-app. Navigate, check
            availability, and plan your stops effortlessly. Embrace green travel
            with P O W E R S P O T and fuel your journey ahead!
          </p>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={Charge} alt="mockup" width="auto" height="auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
