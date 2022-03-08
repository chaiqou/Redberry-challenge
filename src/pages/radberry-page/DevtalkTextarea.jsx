import React from "react";
import { Field, ErrorMessage } from "formik";
import { reusableStylesError } from "../../helpers/ReusableStyles";

const DevtalkTextarea = ({ label, name, ...rest }) => {
  return (
    <div>
      <div className="flex justify-center absolute left-[195px] top-[500px]">
        <div className="mb-3 xl:w-96">
          <label
            className="form-label inline-block mb-2 text-gray-700"
            htmlFor={name}
          >
            {label}
          </label>
          <Field
            className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            as="textarea"
            name={name}
            id={name}
            {...rest}
          />
        </div>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className={`${reusableStylesError} left-[620px] top-[540px]`}
      />
    </div>
  );
};

export default DevtalkTextarea;
