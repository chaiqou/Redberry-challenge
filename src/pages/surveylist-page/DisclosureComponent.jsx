import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  disclosureHeaders,
  labelsforDisclosure,
} from "../../helpers/ReusableStyles";

const DisclosureComponent = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center w-[1154px] h-[54px] justify-between  px-4 py-2 text-sm font-medium text-left text-white bg-[#FE3B1F]  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <span>3</span>
            <AiOutlineArrowUp
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-white`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black w-[1154px] h-[750px]  bg-white">
            <h1 className={`${disclosureHeaders} top-[180px] left-[140px]`}>
              Personal information
            </h1>
            <p className={`${labelsforDisclosure} top-[270px] left-[140px]`}>
              First Name
            </p>

            <p className={`${labelsforDisclosure} top-[320px] left-[140px]`}>
              Last Name
            </p>
            <p className={`${labelsforDisclosure} top-[370px] left-[140px]`}>
              E Mail
            </p>
            <p className={`${labelsforDisclosure} top-[420px] left-[140px]`}>
              Phone
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureComponent;
