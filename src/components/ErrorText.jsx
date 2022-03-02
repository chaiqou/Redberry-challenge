import React from "react";

const ErrorText = ({ text, position }) => {
  return (
    <div
      className={`absolute ${position} left-[197px] p-3 mb-3 text-sm text-redBerry  bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800`}
      role="alert"
    >
      <span className="font-medium">{text}!</span> Please fill things up and try
      submitting again.
    </div>
  );
};

export default ErrorText;
