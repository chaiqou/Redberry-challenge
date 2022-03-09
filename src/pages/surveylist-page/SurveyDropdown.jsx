import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineArrowUp } from "react-icons/ai";

const SurveyDropdown = () => {
  return (
    <div className="w-full absolute top-[180px] left-[300px] px-4 pt-16 ">
      <div className="w-full p-2 mx-auto bg-black rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-[1154px] justify-between  px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Person 1</span>
                <AiOutlineArrowUp
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black w-[1154px] h-[650px]  bg-white">
                Trash
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default SurveyDropdown;
