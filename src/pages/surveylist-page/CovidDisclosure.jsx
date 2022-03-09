import React from "react";
import {
  disclosureHeaders,
  headersforDisclosure,
  radioValuesDisclosure,
} from "../../helpers/ReusableStyles";
import { IoRadioButtonOnOutline, IoCalendarOutline } from "react-icons/io5";

const CovidDisclosure = ({
  workpreference,
  hadcovid,
  vaccinated,
  vaccinatedtime,
  covidtime,
}) => {
  return (
    <>
      <h1 className={`${disclosureHeaders} top-[420px] left-[140px]`}>
        Covid Situation
      </h1>
      <p className={`${headersforDisclosure} left-[140px] top-[450px]`}>
        how would you prefer to work?
      </p>
      <IoRadioButtonOnOutline className="absolute w-[13px] h-[13px] left-[140px] top-[500px]" />
      <p className={`${radioValuesDisclosure} left-[170px] top-[500px]`}>
        {workpreference.replace(/[^a-zA-Z]/g, " ")}
      </p>
      <p className={`${headersforDisclosure} left-[140px] top-[550px]`}>
        Did you have covid 19?
      </p>
      <IoRadioButtonOnOutline className="absolute w-[13px] h-[13px] left-[140px] top-[600px]" />
      <p className={`${radioValuesDisclosure} left-[170px] top-[600px]`}>
        {hadcovid === true ? "Yes" : "No"}
      </p>
      <p className={`${headersforDisclosure} left-[140px] top-[650px]`}>
        Have you been vaccinated?
      </p>
      <IoRadioButtonOnOutline className="absolute w-[13px] h-[13px] left-[140px] top-[700px]" />
      <p className={`${radioValuesDisclosure} left-[170px] top-[700px]`}>
        {vaccinated === true ? "Yes" : "No"}
      </p>
      <p className={`${headersforDisclosure} left-[140px] top-[750px]`}>
        When did you have covid 19?
      </p>
      <div className="absolute left-[140px] top-[800px] flex justify-center border-[#525557] w-[349px] h-[54px] items-center border-2">
        <IoCalendarOutline className="absolute left-[300px] w-[16px] h-[18x] text-redBerry" />
        <p>{covidtime}</p>
      </div>
      <p className={`${headersforDisclosure} left-[140px] top-[870px]`}>
        Have you been vaccinated?
      </p>
      <div className="absolute left-[140px] top-[920px] flex justify-center border-[#525557] w-[349px] h-[54px] items-center border-2">
        <IoCalendarOutline className="absolute left-[300px] w-[16px] h-[18x] text-redBerry" />
        <p>{vaccinatedtime}</p>
      </div>
    </>
  );
};

export default CovidDisclosure;

//
