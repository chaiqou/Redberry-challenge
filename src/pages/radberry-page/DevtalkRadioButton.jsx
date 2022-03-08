import React from "react";
import { Field, ErrorMessage } from "formik";

const DevtalkRadioButton = ({ label, name, options, rest }) => {
  return (
    <div className="mb-[10px] flex justify-center flex-col absolute  w-[745px] h-[157px] left-[196px] top-[309px]">
      <label className="mb-[5px] font-['Montserrat']  h-[52px] font-normal text-[22px] leading-[12px] w-[900px] ">
        {label}
      </label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="form-check" key={option.key}>
                <input
                  type="radio"
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-redBerry
 checked:border-[#FE3B1F]  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
      <ErrorMessage
        component="div"
        name={name}
        className="absolute font-medium left-[597px] top-[5px]  p-3 mb-3 text-sm text-redBerry  bg-red-100 rounded-lg dark:bg-red-600 dark:text-red-800"
      />
    </div>
  );
};

export default DevtalkRadioButton;
