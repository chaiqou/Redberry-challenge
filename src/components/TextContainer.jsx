import React from "react";

const TextContainer = ({ children, position }) => {
  return (
    <p
      className={`absolute ${position} w-[705px] h-[606px] tracking-wider 
      items-center flex text-white non-italic text-[29px] font-['Montserrat'] leading-loose`}
    >
      {children}
    </p>
  );
};

export default TextContainer;
