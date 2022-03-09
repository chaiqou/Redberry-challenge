import DisclosureComponent from "./DisclosureComponent";
import Axios from "axios";
import { useState, useEffect } from "react";

const SurveyDropdown = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://bootcamp-2022.devtest.ge/api/applications?token=f2925294-fef9-4ea0-8020-d0998c9c5e54"
    ).then((response) => {
      setDatas(response.data);
    });
  }, []);

  return (
    <div className="w-full absolute top-[180px] left-[300px] px-4 pt-16 ">
      <div className="w-full p-2 mx-auto bg-black rounded-2xl">
        <DisclosureComponent />
      </div>
    </div>
  );
};

export default SurveyDropdown;
