import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Submit = () => {
  const [name, setName] = useState({});
  const [covid, setCovid] = useState({});
  const [devtalk, setDevtalk] = useState({});
  const [technical, setTechnical] = useState([]);

  //personal page get data

  useEffect(() => {
    const names = localStorage.getItem("name");
    if (names) {
      setName(JSON.parse(names));
    }
  }, []);

  // covid page get data
  useEffect(() => {
    const covids = localStorage.getItem("covid");
    if (covids) {
      setCovid(JSON.parse(covids));
    }
  }, []);

  // devtalk page get data  (last page)
  useEffect(() => {
    const devtalks = localStorage.getItem("devtalk");
    if (devtalks) {
      setDevtalk(JSON.parse(devtalks));
    }
  }, []);

  // technical page get data
  useEffect(() => {
    const technicals = localStorage.getItem("technical");
    if (technicals) {
      setTechnical(JSON.parse(technicals));
    }
  }, []);

  console.log(name, covid, devtalk, technical);

  return (
    <div className="h-screen bg-black">
      <Link
        to="/thanks"
        className="animate-bounce-in absolute w-[12rem] left-[754px] top-[522px]  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl
         focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6"
      >
        Submit
      </Link>
      <Link
        to="/personal"
        className="animate-bounce-in absolute w-[12rem] left-[754px] top-[582px]  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl
        focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6"
      >
        Back
      </Link>
    </div>
  );
};

export default Submit;
