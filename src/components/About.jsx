import React from "react";

const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 45,
    },
    {
      label: "Years of experience",
      number: 10,
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className=" text-zinc-300 mt-4 md:mb-8 md:text-xl  md:max-w-[60ch]">
            Welcome! I&apos;m Andrew, a professional web developer with a knack
            for crafting visually stunning and highly functional websites,and
            enterprise applications. Combining creativity and technical
            expertise, I transform your vision into digital masterpiece that
            excels in both appearance and performance.
          </p>

          <div className="flex flex-wrap items-center  gap-4 md:gap-7 ">
            {aboutItems.map(({ label, number }, key) => {
              return (
                <div className="" key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className=" text-2xl font-semibold text-white md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 font-semibold">
                      {label}
                    </p>
                  </div>
                </div>
              );
            })}

            <img
              src="images/logo.svg"
              alt="Logo"
              height={30}
              width={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
