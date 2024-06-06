import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/hero/hero-image.png";

import CtaButton from "@/assets/cta-button.svg";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            Make <span className="italic">your home</span> an ode to joy
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            We turn your empty house to a lovely home, making the compact spaces
            with sapce saving furnitures. Making the unique tastes of yours into
            reality!{" "}
          </p>
        </div>
      </div>
      <div className="relative">
        <Image src={HeroImage} alt="Interior Design" />
        <a href="/">
          <Image
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
