import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button.jsx";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <figure className="img-box w-9 h-9 rounded-lg">
              {" "}
              <img
                src="/images/avatar-1.jpg"
                alt="Andrew-Laryea Portrait"
                height={40}
                width={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-2 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="Download"
              href="https://drive.google.com/file/d/14p_D2xGZWbCzja0aBtdN0f7Py6whUSGo/view?usp=drive_link"
            />{" "}
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40  to-65% rounded-[50px] overflow-hidden">
            <img
              src="images/herobanner.png"
              alt="Andrew Laryea"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
