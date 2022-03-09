import React from "react";
import {
  disclosureHeaders,
  labelsforDisclosure,
  valuesforDisclosure,
} from "../../helpers/ReusableStyles";

const SkillsDisclosure = ({ language, experience }) => {
  return (
    <>
      <h1 className={`${disclosureHeaders} top-[180px] left-[700px]`}>
        Skillset
      </h1>
      <p className={`${labelsforDisclosure} top-[250px] left-[700px]`}>React</p>
      <p
        className={`${valuesforDisclosure} top-[250px] left-[860px]`}
      >{`Years of experience ${experience}`}</p>

      <p className={`${labelsforDisclosure} top-[290px] left-[700px]`}>PHP</p>
      <p
        className={`${valuesforDisclosure} top-[290px] left-[860px]`}
      >{`Years of experience ${experience}`}</p>
    </>
  );
};

export default SkillsDisclosure;
