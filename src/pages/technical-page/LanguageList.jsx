import Language from "./Language";
import { v4 as uuidv4 } from "uuid";

const LanguagesList = ({ userValues, setUserValues }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col h-[140px] w-68 absolute left-[180px] top-[650px]`}
    >
      <ul className=" w-[490px] list-none ">
        {userValues.map((userValue, index) => (
          <Language
            key={uuidv4()}
            userValue={userValue}
            skills={userValue.skills}
            userValues={userValues}
            experience={userValue.experience}
            setUserValues={setUserValues}
          />
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
