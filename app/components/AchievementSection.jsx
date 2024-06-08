"use client"
import React from 'react';
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+"
  },
  {
    prefix: "~",
    metric: "Hackathons",
    value: "3"
  },
  {
    metric: "Awards",
    value: "2"
  },
  {
    metric: "Years",
    value: "2+"
  }
];

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 sm:py-12 lg:py-16'>
      <div className='border-[#33353F] border rounded-md py-8 px-6 sm:px-12 md:px-16 flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-4'>
        {achievementsList.map((achievement, index) => {
          const { prefix = "", value, postfix = "", metric } = achievement;
          const numericValue = parseInt(value.replace(/\D/g, ''), 10);
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center text-center mx-4'
            >
              <h2 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold flex flex-row'>
                {prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={numericValue}
                  locale='en-US'
                  className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold'
                  configs={(_, i) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (i + 1),
                    };
                  }}
                />
                {postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>{metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchievementSection;
