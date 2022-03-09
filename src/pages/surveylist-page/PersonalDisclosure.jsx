import React from "react";
import {
  disclosureHeaders,
  labelsforDisclosure,
  valuesforDisclosure,
} from "../../helpers/ReusableStyles";

const PersonalDisclosure = ({ firstname, lastname, email, phone }) => {
  return (
    <>
      <h1 className={`${disclosureHeaders} top-[180px] left-[140px]`}>
        Personal information
      </h1>
      <p className={`${labelsforDisclosure} top-[250px] left-[140px]`}>
        First Name
      </p>
      <p className={`${valuesforDisclosure} top-[250px] left-[300px]`}>
        {firstname}
      </p>

      <p className={`${labelsforDisclosure} top-[290px] left-[140px]`}>
        Last Name
      </p>
      <p className={`${valuesforDisclosure} top-[290px] left-[300px]`}>
        {lastname}
      </p>
      <p className={`${labelsforDisclosure} top-[330px] left-[140px]`}>
        E Mail
      </p>
      <p className={`${valuesforDisclosure} top-[330px] left-[300px]`}>
        {email}
      </p>
      <p className={`${labelsforDisclosure} top-[370px] left-[140px]`}>Phone</p>
      <p className={`${valuesforDisclosure} top-[370px] left-[300px]`}>
        {phone}
      </p>
    </>
  );
};

export default PersonalDisclosure;
