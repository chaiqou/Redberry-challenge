import React from "react";

const AddButton = ({ children, position }) => {
  return (
    <button
      type="submit"
      className={`${position} absolute text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
    >
      {children}
    </button>
  );
};

export default AddButton;
