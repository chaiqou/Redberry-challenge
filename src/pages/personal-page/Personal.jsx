import React, { useEffect } from "react";
// components
import SplitContainer from "../../components/split-container/SplitContainer";

const Personal = () => {
  // componentis pirvelive rendlerze sheicvalos documentis saxeli(title)
  useEffect(() => {
    document.title = "Redberry - Personal";
  }, []);

  // reusable text styles
  const textStyles = `absolute w-[716px] h-[128px] font-['Rowdies'] text-redBerry
  non-italic font-normal text-6xl leading-[69px]`;

  return (
    <SplitContainer>
      <h1 className={`left-[65px] top-[45px] ${textStyles}`}>
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <h1 className={`left-[60vw] top-[45px] flex items-center  ${textStyles}`}>
        Redberry Origin
      </h1>
      <p
        className="absolute w-[705px] h-[606px] left-[800px] top-[80px] leading-loose tracking-wider items-center flex 
      text-white non-italic text-lg font-['Montserrat']"
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
