import { useState, useEffect } from "react";
import SurveyDropdown from "./SurveyDropdown";
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

  return (
    // <div>
    //   {datas.map((data, i) => (
    //     <div key={i}>test</div>
    //   ))}
    // </div>
    <div className="h-screen bg-black">
      <h1
        className={`absolute w-[1128px] top-[94px] h-[100px] left-[359px] text-white font-['Rowdies'] font-normal non-italic text-6xl leading-[70px] flex items-center tracking-wider`}
      >
        Submitted Applications
      </h1>
      <SurveyDropdown />
    </div>
  );
};

export default SurveyPage;
