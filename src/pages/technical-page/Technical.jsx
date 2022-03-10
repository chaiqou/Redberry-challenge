import React, { useEffect } from "react";
import { reusableHeaderStyles } from "../../helpers/ReusableStyles";
import SplitContainer from "../../components/SplitContainer";
import TextContainer from "../../components/TextContainer";
import TechnicalForm from "./TechnicalForm";

const Technical = () => {
  useEffect(() => {
    document.title = "Redberry - Technical";
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
      <TechnicalForm />
    </SplitContainer>
  );
};

export default Technical;
