import React from "react";
import "./experience.css";
import Language from "./Language";
import { reusableStylesField } from "../../helpers/ReusableStyles";

const LanguagesList = ({ userValues }) => {
  return (
    <div className={`${reusableStylesField} top-[620px]`}>
      <ul>
        {userValues.map((userValue) => (
          <Language
            key={userValue.skills}
            skills={userValue.skills}
            experience={userValue.experience}
          />
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
