import React, { useEffect } from "react";

// components
import SplitContainer from "../../components/SplitContainer";
import TextContainer from "../../components/TextContainer";
import PersonalForm from "../personal-page/PersonalForm";

const Personal = () => {
  // componentis pirvelive rendlerze sheicvalos documentis saxeli(title)
  useEffect(() => {
    document.title = "Redberry - Personal";
  }, []);

  // reusable text styles
  const textStyles = `font-['Rowdies'] absolute w-[716px] text-redBerry non-italic font-normal text-[64px] leading-[79px]`;

  return (
    <SplitContainer>
      <h1
        className={`h-[128px] left-[105px] top-[131px] overflow-visible ${textStyles}`}
      >
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <PersonalForm />
      <h1
        className={`h-[94px] left-[1116px] top-[112px] flex items-center ${textStyles} `}
      >
        Redberry Origin
      </h1>

      <TextContainer position={`left-[1119px] top-[195px]`}>
        You watch “What? Where? When?” Yeah. Our founders used to play it.
        That’s where they got a question about a famous American author and
        screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
        exact name and he answered Ray Redberry. And at that moment, a name for
        a yet to be born company was inspired - Redberry 😇
      </TextContainer>
    </SplitContainer>
  );
};

export default Personal;
