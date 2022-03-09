import React, { useState, useEffect } from "react";
import Axios from "axios";

const SurveyPage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://bootcamp-2022.devtest.ge/api/applications?token=f2925294-fef9-4ea0-8020-d0998c9c5e54"
    ).then((response) => {
      setDatas(response.data);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      {datas.map((data, i) => (
        <div key={i}>{data.email}</div>
      ))}
    </div>
  );
};

export default SurveyPage;
