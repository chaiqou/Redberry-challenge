import React from "react";
import "./experience.css";

const Language = ({ skills, experience }) => {
  return (
    <div>
      <li className="first-letter:text-7xl first-letter:font-bold  flex text-sm justify-between font-['Montserrat'] italic font-normal leading-5 items-center ">
        {` ${skills}  Years of Experience ${experience}`}
      </li>
      {/* <button type="button">bt</button> */}
    </div>
  );
};

export default Language;
