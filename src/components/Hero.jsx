import React from "react";

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

          <h2 className="headline-1">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="">ButtonPrimary ButtonOutline</div>
        </div>

        <div>
          <img
            src="images/hero-banner.png"
            alt="Andrew Laryea"
            width={656}
            height={800}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
