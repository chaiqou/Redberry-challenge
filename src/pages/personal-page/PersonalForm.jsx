import React from "react";

const PersonalForm = () => {
  const fontStyles = `font-['Montserrat'] font-normal text-lg italic leading-4`;

  return (
    <form className="flex flex-col">
      <div className="mb-6">
        <input
          type="text"
          id="firstName"
          className={`absolute h-[54px] left-48 top-[390px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
          ${fontStyles}
          `}
          placeholder="First name"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          id="lastName"
          className={`absolute h-[54px] left-48 top-[460px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
        ${fontStyles}`}
          placeholder="Last name"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          id="emailAddress"
          className={`absolute h-[54px] left-48 top-[530px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light first-letter
          ${fontStyles}
          `}
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="number"
          id="phoneNumber"
          className={`absolute h-[54px] left-48 top-[600px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light 
          ${fontStyles}
          `}
          placeholder="Phone number"
          required
        />
      </div>
    </form>
  );
};

export default PersonalForm;
