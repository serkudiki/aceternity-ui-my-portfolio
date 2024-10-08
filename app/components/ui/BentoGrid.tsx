'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe"
import Lottie from "react-lottie";
import { useState } from "react";
// import animationData from "@/data/confetti.json";
import animationData from "./lottie/lottie.json";
import MagicButton from "./MagicButton";
// import { animationData } from './data/lottie.json'


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 sm:gap-8 mx-auto ",
      
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  // header,
  id,
  // icon,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string;

}) => {

  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
  const [copied, setcopied] = useState (false); 

  const handleCopy = () => {
    navigator.clipboard.writeText('contact@Ram.com');
    setcopied(true);
  }

  return (
    <div
    className={cn(
      // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
      "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
      className
      )}

      style={{
        background: 'rgb(0,29,100)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%) rounded-2xl',
      }}
      >

{/* add img divs */}
<div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}>
            {spareImg && (
                <img
                src={spareImg}
                alt={spareImg}
                className={'object-cover object-center w-full h-full'}
                />
            )}
        </div>
            
            {id === 6 && (
            
            <BackgroundGradientAnimation>
                {/* <div className="absolute z-50 flex items-center justify-center h-fit text-white-100 font-bold "/> */}
            </BackgroundGradientAnimation>
            )
            }

            <div className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>
            
            <div>


        <div className="font-sans font-light text-white-100 text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300 ">
          {description}
        </div>
        <div className="font-sans text-white font-bold text-lg lg:text-3xl max-w-80 z-10">
          {title}
        </div>
            </div>
            


            {id === 2 && <GlobeDemo /> }

            {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={'absolute -bottom-5 right-0'}>
                    
                    <Lottie options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      }

                    }}/>
                    
                  </div>

                  <MagicButton title={copied ? 'Hurray, Lottie' : 'Try me'} icon={undefined} position={""} otherClasses="!bg-[#666666]" handleClick={handleCopy}/>

                </div>

            )}

      </div>

        
      </div>
    </div> 
  );
};


export default BentoGridItem