import React, { useEffect } from "react";
// components
import SplitContainer from "../../components/split-container/SplitContainer";

const Personal = () => {
  // componentis pirvelive rendlerze sheicvalos documentis saxeli(title)
  useEffect(() => {
    document.title = "Redberry - Personal";
  }, []);

  // reusable text styles
  const textStyles = `font-['Rowdies'] text-redBerry non-italic font-normal text-5xl leading-tight`;

  return (
    <SplitContainer>
      <h1
        className={`absolute w-[45vw] h-[30vh] left-[5vw] top-[7vh] ${textStyles}`}
      >
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <h1
        className={`absolute w-[45vw] h-[30vh] left-[60vw] top-[7vh] flex items-center  ${textStyles} `}
      >
        Redberry Origin
      </h1>
      <p
        className="absolute w-[45vw] h-[606px] left-[53vw] top-[8vh] leading-relax tracking-wider items-center flex 
      text-white non-italic text-2xl font-['Montserrat']"
      >
        You watch “What? Where? When?” Yeah. Our founders used to play it.
        That’s where they got a question about a famous American author and
        screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
        exact name and he answered Ray Redberry. And at that moment, a name for
        a yet to be born company was inspired - Redberry 😇
      </p>
    </SplitContainer>
  );
};

export default Personal;
