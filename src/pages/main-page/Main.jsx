import React from "react";
import { Link } from "react-router-dom";
// assets

const Main = () => {
  return (
    <div className="h-full w-full">
      <div className="absolute inset-0 bg-zinc-900 bg-stars-backs">
        <h1
          className="absolute w-[1090px] h-[212px] left-[474px] top-[175px] overflow-visible font-['Rowdies'] non-italic  
      inset-auto flex text-[96px] font-normal text-redBerry items-center text-center leading-10"
        >
          Welcome Rocketeer !
        </h1>
        <Link
          to="/personal"
          className="animate-bounce-in absolute w-[12rem] left-[754px] top-[522px]  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl
         focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6"
        >
          Start Questionnaire
        </Link>
        <Link
          to="/survey"
          className="animate-bounce-in absolute  left-[60.5rem] top-[522px]  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l
         focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submitted Applications
        </Link>
        <div className=" animate-slide-in  bg-rocket-man bg-no-repeat w-full h-full bg-bottom" />
      </div>
    </div>
  );
};

export default Main;
