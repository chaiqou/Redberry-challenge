import React, { useEffect } from "react";

import SplitContainer from "../../components/SplitContainer";
import TextContainer from "../../components/TextContainer";

const reusableHeaderStyles = `absolute w-[788px] top-[72px] h-[175px] text-redBerry font-['Rowdies'] font-normal non-italic text-6xl leading-[79px] flex items-center text-center`;

const Covid = () => {
  useEffect(() => {
    document.title = "Redberry - Covid";
  }, []);
  return (
    <SplitContainer>
      <h1 className={`${reusableHeaderStyles} left-[115px]`}>
        Tell us about your skills
      </h1>
      <h1 className={`${reusableHeaderStyles} left-[1089px]`}>
        A bit about our battles
      </h1>
      <TextContainer position={`left-[1089px] top-[240px]`}>
        As we said, Redberry has been on the field for quite some time now, and
        we have touched and embraced a variety of programming languages,
        technologies, philosophies, and frameworks. We are battle-tested in PHP
        Laravel Stack with Vue.js, refined in React, and allies with Serverside
        technologies like Docker and Kubernetes, and now we have set foot in the
        web3 industry.
      </TextContainer>
    </SplitContainer>
  );
};

export default Covid;
