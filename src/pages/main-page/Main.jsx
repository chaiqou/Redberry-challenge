import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="h-screen ">
      <div className="absolute inset-0 bg-zinc-900 bg-stars-backs">
        <h1
          className="absolute font-['Rowdies'] non-italic left-[434px] top-[175px] 
      inset-auto flex text-7xl font-normal text-redBerry items-center text-center leading-10"
        >
          Welcome Rocketeer !
        </h1>
        <Link
          to="/personal"
          className="animate-bounce-in absolute left-[554px] top-[320px] text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl
         focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Start Questionnaire
        </Link>
        <Link
          to="/submit"
          className="animate-bounce-in absolute left-[780px]  top-[320px] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l
         focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submitted Applications
        </Link>
        <div className="animate-slide-in  bg-rocket-man bg-no-repeat w-full h-full bg-right-bottom" />
      </div>
    </div>
  );
};

export default Main;
