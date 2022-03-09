import React from "react";
import {
  disclosureHeaders,
  headersforDisclosure,
  radioValuesDisclosure,
} from "../../helpers/ReusableStyles";
import { IoRadioButtonOnOutline } from "react-icons/io5";

const InsightDisclosure = ({
  organizedevtalk,
  devtalktopic,
  somethingspecial,
}) => {
  return (
    <>
      <h1 className={`${disclosureHeaders} top-[420px] left-[700px]`}>
        Insigts
      </h1>
      <p className={`${headersforDisclosure} left-[700px] top-[450px]`}>
        Would you attend Devtalks and maybe also organize your own?
      </p>
      <IoRadioButtonOnOutline className="absolute w-[13px] h-[13px] left-[700px] top-[510px]" />
      <p className={`${radioValuesDisclosure} left-[740px] top-[510px]`}>
        {organizedevtalk === true ? "Yes" : "No"}
      </p>
      <p className={`${headersforDisclosure} left-[700px] top-[570px]`}>
        When did you have covid 19?
      </p>
      <div className="absolute left-[700px] top-[620px] flex justify-center border-[#525557] w-[349px] h-[122px] items-center border-2">
        <p className="absolute top-[2px] text-[#3A3A3A] left-[3px] w-[357px] h-[32px] font-['Montserrat'] text-[13px] leading-[16px] flex items-center">
          {devtalktopic}
        </p>
      </div>
      <p className={`${headersforDisclosure} left-[700px] top-[780px]`}>
        Tell us somthing special
      </p>
      <div className="absolute left-[700px] top-[830px] flex justify-center border-[#525557] w-[349px] h-[122px] items-center border-2">
        <p className="absolute top-[2px] text-[#3A3A3A] left-[3px] w-[357px] h-[32px] font-['Montserrat'] text-[13px] leading-[16px] flex items-center">
          {somethingspecial}
        </p>
      </div>
    </>
  );
};

export default InsightDisclosure;
