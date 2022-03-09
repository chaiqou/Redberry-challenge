import DisclosureComponent from "./DisclosureComponent";
import Axios from "axios";
import { useState, useEffect } from "react";

const SurveyDropdown = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://bootcamp-2022.devtest.ge/api/applications?token=0ff1fdf5-3ddb-4602-8d61-8dd42eed0cc8"
    ).then((response) => {
      setDatas(response.data);
    });
  }, []);

  console.log(datas);

  return (
    <div className="w-full absolute top-[100px] left-[300px] px-4 pt-16 ">
      <div className="w-full p-2 mx-auto bg-black rounded-2xl">
        {datas.map((data, index) => (
          <DisclosureComponent
            key={index}
            index={index}
            firstname={data.first_name}
            lastname={data.last_name}
            email={data.email}
            phone={data.phone}
            experience={data.skills[0].experience}
            workpreference={data.work_preference}
            hadcovid={data.had_covid}
            covidtime={data.had_covid_at}
            vaccinated={data.vaccinated}
            vaccinatedtime={data.vaccinated_at}
            organizedevtalk={data.will_organize_devtalk}
            devtalktopic={data.devtalk_topic}
            somethingspecial={data.something_special}
          />
        ))}
      </div>
    </div>
  );
};

export default SurveyDropdown;
