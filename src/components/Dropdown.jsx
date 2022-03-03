import React, { useState, useEffect } from "react";
import { Field } from "formik";
import Axios from "axios";

const Dropdown = ({ position }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const data = Axios.get("https://bootcamp-2022.devtest.ge/api/skills").then(
      (response) => {
        setOptions(response.data);
      }
    );
  }, []);

  return (
    <Field
      as="select"
      name={options}
      className={` ${position} h-[48px] left-48 font-['Montserrat']text-lg font-semibold italic leading-4 absolute  shadow-sm bg-gray-50 border 
  border-gray-300 first-letter:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        );
      })}
    </Field>
  );
};

export default Dropdown;
