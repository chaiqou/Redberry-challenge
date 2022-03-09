import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import PersonalDisclosure from "./PersonalDisclosure";
import SkillsDisclosure from "./SkillsDisclosure";
import CovidDisclosure from "./CovidDisclosure";

const DisclosureComponent = ({
  email,
  firstname,
  lastname,
  phone,
  index,
  experience,
  workpreference,
  hadcovid,
  covidtime,
  vaccinated,
  vaccinatedtime,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center w-[1154px] h-[54px] justify-between  px-4 py-2 text-sm font-medium text-left text-white bg-[#FE3B1F]  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <span>{index + 1}</span>
            <AiOutlineArrowUp
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-white`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black w-[1154px] h-[870px]  bg-white">
            <PersonalDisclosure
              firstname={firstname}
              lastname={lastname}
              email={email}
              phone={phone}
            />
            <SkillsDisclosure experience={experience} />
            <CovidDisclosure
              workpreference={workpreference}
              hadcovid={hadcovid}
              covidtime={covidtime}
              vaccinated={vaccinated}
              vaccinatedtime={vaccinatedtime}
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureComponent;
