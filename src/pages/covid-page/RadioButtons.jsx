import React from "react";
import { Field, ErrorMessage } from "formik";
import { reusableStylesError } from "../../helpers/ReusableStyles";

const RadioButtons = ({ label, name, options, rest }) => {
  return (
    <div className="mb-[20px] flex justify-center flex-col absolute  w-[645px] h-[157px] left-[166px] top-[301px]">
      <label className="mb-[20px] font-['Montserrat'] h-[52px] font-normal text-[22px] leading-[12px] flex items-center  ">
        {label}
      </label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="form-check" key={option.key}>
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-redBerry 
                  checked:border-[#FE3B1F]  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label
                  className="form-check-label inline-block cursor-pointer text-gray-800"
                  htmlFor={option.value}
                >
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage component="div" name={name} />
    </div>
  );
};

export default RadioButtons;

// absolute  w-[645px] h-[157px] left-[166px] top-[301px]
