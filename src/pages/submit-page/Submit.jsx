import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Submit = () => {
  const [name, setName] = useState({});
  const [covid, setCovid] = useState({});
  const [devtalk, setDevtalk] = useState({});
  const [technical, setTechnical] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Redberry - Submit";
  }, []);

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

  // this method converts string to boolean
  const convertToBoolean = (val) => val === "true" || val === "True";

  const onClickHandler = () => {
    const parameters = {
      token: "8f7bb12a-af99-41a6-963e-8957509700c0",
      first_name: name.first_name,
      last_name: name.last_name,
      email: name.email,
      phone: String(name.phone),
      skills: [
        {
          id: "1",
          experience: technical.experience,
        },
      ],
      work_preference: covid.work_preference,
      had_covid: convertToBoolean(covid.had_covid),
      had_covid_at: covid.had_covid_at,
      vaccinated: convertToBoolean(covid.vaccinated),
      vaccinated_at: covid.vaccinated_at,
      will_organize_devtalk: convertToBoolean(devtalk.will_organize_devtalk),
      devtalk_topic: devtalk.devtalk_topic,
      something_special: devtalk.something_special,
    };

    const token = "8f7bb12a-af99-41a6-963e-8957509700c0";

    const config = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .post(
        "https://bootcamp-2022.devtest.ge/api/application",
        parameters,
        config
      )
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        console.log("Erreeer", err.response);
      });

    if (parameters) navigate("/thanks");
  };

  return (
    <div className="h-screen bg-black">
      <button
        onClick={onClickHandler}
        className="animate-bounce-in absolute w-[12rem] left-[870px] top-[522px]  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl
         focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6"
      >
        Submit
      </button>
      <Link
        to="/personal"
        className="animate-bounce-in absolute w-[12rem] left-[870px] top-[582px]  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl
        focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-6"
      >
        Back
      </Link>
    </div>
  );
};

export default Submit;
