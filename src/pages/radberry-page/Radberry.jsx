import React, { useEffect } from "react";
import SplitContainer from "../../components/SplitContainer";
import TextContainer from "../../components/TextContainer";
import FormikContainer from "./FormikContainer";

const Redberry = () => {
  useEffect(() => {
    document.title = "Redberry - Redberrian Insights";
  }, []);

  // reusable text styles
  const textStyles = `font-['Rowdies'] absolute w-[716px] text-redBerry non-italic font-normal text-[64px] leading-[79px]`;

  return (
    <SplitContainer>
      <h1
        className={`h-[128px] left-[185px] top-[101px] overflow-visible ${textStyles}`}
      >
        What about you?
      </h1>

      <h1
        className={`h-[94px] left-[1116px] top-[112px] flex items-center ${textStyles} `}
      >
        Redberrian Insights
      </h1>

      <TextContainer position={`left-[1119px] top-[280px]`}>
        We were soo much fun before the pandemic started! Parties almost every
        weekend and lavish employee birthday celebrations! Unfortunately, covid
        ruined that fun like it did almost everything else in the world. But we
        try our best to zhuzh it up a bit. For example, we host biweekly
        Devtalks where our senior and lead developers talk about topics they are
        passionate about. Previous topics have included Web3, NFT, Laravel 9,
        Kubernetes, etc. We hold these talks in the office but you can join our
        Zoom broadcast as well. Feel free to join either as an attendee or a
        speaker!
      </TextContainer>
      <FormikContainer />
    </SplitContainer>
  );
};

export default Redberry;
