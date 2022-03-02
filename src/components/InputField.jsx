import React from "react";

const InputField = ({ onChange, value, type, name, position, placeholder }) => {
  return (
    <div className="mb-6">
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        className={` ${position} h-[48px] left-48 font-['Montserrat']text-lg font-semibold italic leading-4 absolute  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
