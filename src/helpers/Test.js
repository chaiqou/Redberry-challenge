import React from "react";

const Test = () => {
  const parameters = {
    token: "f2925294-fef9-4ea0-8020-d0998c9c5e54",
    first_name: "gela",
    last_name: "gelashvili",
    email: "gelashvili@gela.ge",
    phone: "+995591933382",
    skills: [
      {
        id: 1,
        experience: 3,
      },
    ],
    work_preference: "from_home",
    had_covid: true,
    had_covid_at: "2022-02-23",
    vaccinated: true,
    vaccinated_at: "2022-02-23",
    will_organize_devtalk: true,
    devtalk_topic: "I would ...",
    something_special: "I am special!",
  };
  const token = "f2925294-fef9-4ea0-8020-d0998c9c5e54";

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

  return <div>Test</div>;
};

export default Test;
